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
})

const query = async function (sql, params) {
  let client
  let results = []
  try {
    client = await pool.connect()
    const response = await client.query(sql, params)
    if (response && response.rows) {
      results = response.rows
    }
  } catch (err) {
    console.error(err)
  }
  if (client) client.release()
  return results
}

const queryMemberFavorites = async function () {
  const sql = 'SELECT * FROM plantFavorites;'

  const results = await query(sql)
  return { favorites: results }
}

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
  .get('/pageC', (req, res) => {
    res.render('pages/pageB')
  })
  .get('/pageD', (req, res) => {
    res.render('pages/pageD')
  })
  .get('/Design', (req, res) => {
    res.render('pages/Design')
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
  .post('/register', async function (req, res) {
    res.set({ 'Content-Type': 'application/json' })

    try {
      const client = await pool.connect()

      const name = req.body.name;
      const username = req.body.username;
      const email = req.body.email;
      const phone = req.body.phoneNumber;
      const zip = req.body.zipCode;
      const gardenTime = req.body.gardenTime;
      const password = req.body.password;
      const garden = req.body.garden;

      if (name === null || name === '' || username === null || username === '' || email === null || email === '' || phone === null || phone === '' || zip === null || gardenTime === null || gardenTime === '' || password === null || password === '' || garden === null || garden === '') {
        res.status(400).send('Make sure to fill in all information. Thank You!')
        res.end()
      } else {
        const insertSignUpSql = "INSERT INTO members2 (membername, username, email, phonenumber, zipcode, gardentime, memberpassword, garden) VALUES('" + name + "', '" + username + "', '" + email + "', '" + phone + "', '" + zip + "', '" + gardenTime + "', '" + password + "', '" + garden + "');"


        await client.query(insertSignUpSql)

        res.json({ ok: true })
        client.release()
      }
    } catch (error) {
      console.error('Invalid Entry')
      res.status(400).json({ ok: false })
    }
  })
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
  .get('/Discussion', async (req, res) => {
    try {
      const client = await pool.connect();
      const postSql = "SELECT * FROM feed2;";
      const posts = await client.query(postSql);

      const args = {
        "posts": posts ? posts.rows : null
      };
      res.render("pages/Discussion", args);
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
  .post('/MessageBoard', async function (req, res) {
    res.set({ 'Content-Type': 'application/json' })

    try {
      const client = await pool.connect()

      const idea = req.body.communication

      if (idea === null || idea === '') {
        res.status(400).send('Please type in your ideas. Thank You!')
        res.end()
      } else {
        const insertIdeaSql = "INSERT INTO feed2 (idea) VALUES('" + idea + "');"

        await client.query(insertIdeaSql)

        res.json({ ok: true })
        client.release()
      }
    } catch (error) {
      console.error('Invalid Entry')
      res.status(400).json({ ok: false })
    }
  })

  .get('/favorites', async (req, res) => {
    try {
      const client = await pool.connect();
      const searchSql = "SELECT * FROM plantFavorites2 ORDER BY user_username;";
      const favorites = await client.query(searchSql);
      
      const args = {
        "favorites": favorites ? favorites.rows : null
      };
      res.render("pages/favorites", args);
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
  .post('/AddToFav', async function (req, res) {
    res.set({ 'Content-Type': 'application/json' })

    try {
      const client = await pool.connect()

      const username = req.body.username
      const plantName = req.body.plantName
      const plantDescription = req.body.plantDescription
      const growingNotes = req.body.growingNotes

      if (username === null || username === '' || plantName === null || plantName === '' || plantDescription === null || plantDescription === '' || growingNotes === null || growingNotes === '') {
        res.status(400).send('Make sure to fill in all information. Thank You!')
        res.end()
      } else {
        const insertFavsSql = "INSERT INTO plantFavorites2 (user_username, plant_name, plant_description, growth_notes) VALUES('" + username + "', '" + plantName + "', '" + plantDescription + "', '" + growingNotes + "');"

        await client.query(insertFavsSql)

        res.json({ ok: true })
        client.release()
      }
    } catch (error) {
      console.error('Invalid Entry')
      res.status(400).json({ ok: false })
    }
  })

.listen(PORT, () => console.log(`Listening on ${PORT}`));
