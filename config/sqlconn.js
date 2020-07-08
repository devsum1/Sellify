const mysql = require('mysql');
const dotenv = require("dotenv");
dotenv.config();

const conn = mysql.createConnection({
    host     : process.env.db_host,
    user     : process.env.db_user,
    password : process.env.db_password,
    database : 'olxclone'
  });

  
module.exports = conn;
