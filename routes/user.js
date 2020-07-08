const express = require('express');
const router = express.Router();
const mysqlconn  = require('../config/sqlconn');

router.post('/add',(req,res)=>{
    const query  = `INSERT INTO USER (name,email,password) 
                    VALUES ('sumit','writeonsumit@gmail.com','sumit@79')`;
    mysqlconn.query(query,(err,data)=>{
       if(err)
        return console.log(err);
        res.send(data);
    })
})


router.get('/delete',(req,res)=>{
    const email = 'writeonsumit@gmail.com';
    const query  = `DELETE FROM USER WHERE email = \'${email}\'`;
    mysqlconn.query(query,(err,data)=>{
       if(err)
        return console.log(err);
        res.send(data);
    })
})
// let query = `CREATE TABLE USER (
//     id iNT NOT NULL AUTO_INCREMENT,
//     name VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE,
//     password VARCHAR(100) NOT NULL,
//     PRIMARY KEY (id)
//     )`;
// mysqlconn.query(query,(err,data)=>{
// if(err)
// return console.log(err);
// console.log(data);
// })

// mysqlconn.query(`describe USER`,(err,data)=>{
// if(err)
// return console.log(err);
// console.log(data);
// })
module.exports = router;