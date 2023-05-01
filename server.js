require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5163;
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

express()
  .use(express.static(path.join(__dirname, "public")))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  /*        This code was from the original Tech Stack Validation program, we can keep it here, for future reference
  .get("/", async(req, res) => {
    try {
      const client = await pool.connect();
      const buttonSql = "SELECT * FROM gardenbuttons ORDER BY id ASC;";
      const buttons = await client.query(buttonSql);
      const args = {
        "buttons": buttons ? buttons.rows : null
      };
      res.render("pages/index", args);
    }
    catch (err) {
      console.error(err);
      res.set({
        "Content-Type": "application/json"
      });
      res.json({
        error: err
      });
    }
  })
  .post("/log", async(req, res) => {
    res.set({
      "Content-Type": "application/json"
    });

    try {
      const client = await pool.connect();
      const name = req.body.name;

      const insertSql = `INSERT INTO watered (membername) VALUES ($1::text) RETURNING membername AS new_name;`;
      const selectSql = "SELECT LOCALTIME;";

      const eunhaeSql = "SELECT COUNT(membername) FROM watered WHERE membername = 'Eunhae';";
      const leviSql = "SELECT COUNT(membername) FROM watered WHERE membername = 'Levi';";
      const davisSql = "SELECT COUNT(membername) FROM watered WHERE membername = 'Davis';";

      const insert = await client.query(insertSql, [name]);

      const select = await client.query(selectSql);

      const eunhae = await client.query(eunhaeSql);
      const levi = await client.query(leviSql);
      const davis = await client.query(davisSql);

      const response = {
        newName: insert ? insert.rows[0] : null,
        when: select ? select.rows[0] : null,

        Eunhae: eunhae ? eunhae.rows[0] : null,
        Levi: levi ? levi.rows[0] : null,
        Davis: davis ? davis.rows[0] : null
      };
      res.json(response);
      client.release();
    }
    catch (err) {
      console.error(err);
      res.json({
        error: err
      });
    }
  })
  .post("/reset", async(req, res) => {
    res.set({
      "Content-Type": "application/json"
    });

    try {
      const client = await pool.connect();
      const resetSql = "delete from watered;";
      const reset = await client.query(resetSql);
      const response = {};
      res.json(response);
      client.release();
    }
    catch (err) {
      console.error(err);
      res.json({
        error: err
      });
    }
    */

// This is the navigation, as far as server.js is concerned
// may need to change the format on these based on what each page does
// may need to add more for functions
  .get('/', async function (req, res) {
    res.render('pages/index')
  })
  .get('/pageA', (req, res) => {
    res.render('pages/pageA')
  })
  .get('/pageB', (req, res) => {
    res.render('pages/pageB')
  })
  .get('/pageC', (req, res) => {
    res.render('pages/pageC')
  })
  .get('/pageD', (req, res) => {
    res.render('pages/pageD')
  })
  .get('/pageE', (req, res) => {
    res.render('pages/pageE')
  })
  .get('/pageF', (req, res) => {
    res.render('pages/pageF')
  })
  .get('/ZoneMap', (req, res) => {
    res.render('pages/ZoneMap')
  })
  .get('/ZoneSearch', (req, res) => {
    res.render('pages/ZoneSearch')
  })
  .get('/Gallery', (req, res) => {
    res.render('pages/Gallery')
  })
  .get('/loginAndSignUp', (req, res) => {
    res.render('pages/loginAndSignUp')
  })
  // Would not work on Render, when combined with /searchName and PlantSearch.ejs
  //
  //.get('/PlantSearch', (req, res) => {
  //  res.render('pages/PlantSearch')
  //})
  .get('/PlantSearch2', (req, res) => {
    res.render('pages/PlantSearch2')
  })
  .post('/searchZone', async function (req, res) {
    const Input = req.body.Input
    const apiKey = process.env.Perenual_API_KEY
    const urlApi = `https://perenual.com/api/species-list?key=${apiKey}&hardiness=${Input}`

    const response = await fetch(urlApi, {
      method: 'GET',
      headers: {}
    })

    const result = await response.json()

    if(result.data.length >= 5){
      res.json({ name1: result.data[0].common_name, name2: result.data[1].common_name, name3: result.data[2].common_name, name4: result.data[3].common_name, name5: result.data[4].common_name })
    } else if (result.data.length === 2){
      res.json({ name1: result.data[0].common_name, name2: result.data[1].common_name, name3: null, name4: null, name5: null})
    } else if (result.data.length === 1){
      res.json({ name1: result.data[0].common_name, name2: null, name3: null, name4: null, name5: null})
    } else if (result.data.length === 0){
      res.json({ name1: 'Our database does not currently include plant information for this region, please try again later.', name2: null, name3: null, name4: null, name5: null})
    } else {
      res.status(400).send('Not found, please try again. Thank You!')
      res.end()
    }

  })

  /* /searchName and PlantSearch.ejs, would not work on Render, not sure what the issue is.
  // No api key to save, updated to newer Node version, not sure
  //
  .post('/searchName', async function (req, res) {
    const Input2 = req.body.Input2
    const urlApi2 = `https://openfarm.cc/api/v1/crops/${Input2}`

    const response = await fetch(urlApi2, {
      method: 'GET',
      headers: {}
    })

    const result = await response.json()

    if (result.data && result.data != null && result.data != ''){  /// Appropriate valdiation for search field
      res.json({ name: result.data.attributes.name, Bname: result.data.attributes.binomial_name, description: result.data.attributes.description, sunReq: result.data.attributes.sun_requirements, days: result.data.attributes.growing_degree_days, method: result.data.attributes.sowing_method, spread: result.data.attributes.spread, row: result.data.attributes.row_spacing, height: result.data.attributes.height, image: result.data.attributes.main_image_path })
    } else {
      res.status(400).send('Not found, please try again. Thank You!')
      res.end()
    }

  })*/
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
