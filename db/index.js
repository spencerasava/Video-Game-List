const mysql = require('mysql');
const config = require('./config.js')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'video_game_list',
});

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("YOU'RE IN")
  }
});

module.exports = connection;

// const connection = mysql.createConnection(config);