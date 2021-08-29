const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path');
const db = require('../db');
const app = express();


const hostname = '127.0.0.1';
const port = 3000;

const PUBLIC_DIR = path.resolve(__dirname, '..', 'client', 'dist');
app.use(express.json())
app.use(express.static(PUBLIC_DIR));

app.get('/games', (req, res) => {

  const sql = `SELECT * FROM games`;

  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      // console.log(results);
      res.send(results);
      // res.end();
    }
  })
  // res.sendStatus(200);
  // res.send('you successfully got this.')
})

app.get('/games/title', (req, res) => {
  const sql = `SELECT title FROM games`;
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      res.send(500);
    }
    // res.send(500);
    res.send(results);
  })
})

app.post('/games', (req,res) => {
  const sql = `INSERT INTO games (title, platform, completed) VALUES ('${req.body.title}', '${req.body.platform}', ${req.body.completed})`;
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      res.send(418);
    } else {

      res.send(201);
    }
  })
})

  // app.get('/games/:id')


  // app.post();

  // app.put();






app.listen(port, () => {
  console.log('Example app listening at http://localhost:3000')
})



// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.end('This is going to be our video game list app');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });