const faker = require('faker');
const mysqlconn = require('../config/sqlconn');
const { company } = require('faker');
let randomuserdata = [];
let detail ="";
for(let i = 0;i<5;i++){
const randomName = faker.name.findName().replace('\'','');
const randomEmail = faker.internet.email(); 
const randomPassword = faker.internet.password();

const randomdata = {
      name:randomName,
      email:randomEmail,
      password:randomPassword
};
detail+=`(\'${randomName}\',\'${randomEmail}\',\'${randomPassword}\'),\n`

//Array of fake user data
randomuserdata.push(randomdata);

const queryArr = [randomName,randomEmail,randomPassword];
// const query  = 'INSERT INTO USER (name,email,password) VALUES (?,?,?)'
//     mysqlconn.query(query,queryArr,(err,data)=>{
//        if(err)
//         return console.log(err);
        
//         console.log(randomdata.name+"added to db"+i);
//     })

}

//Execute directly in mysql workbench
let finalQuery= `INSERT INTO USER (name,email,password) VALUES ${detail.slice(0,-2)}\;`;
module.exports = finalQuery;