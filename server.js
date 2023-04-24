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
  .get('/pageG', (req, res) => {
    res.render('pages/pageG')
  })
  .get('/pageH', (req, res) => {
    res.render('pages/pageH')
  })
  .get('/pageI', (req, res) => {
    res.render('pages/pageI')
  })
  .get('/ZoneMap', (req, res) => {
    res.render('pages/ZoneMap')
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
