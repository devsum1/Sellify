const express = require("express");
const router = express.Router();
const mysqlconn = require("../config/sqlconn");
const upload = require("../config/multer");
const randomPostsData = require('../data/postsdata');


router.post("/add", upload.array("files", 12), (req, res, next) => {
  const files = req.files;
  
  if (!files) {
    const error = new Error("Please choose files");
    error.httpStatusCode = 400;
    return next(error);
  }
  const brand = req.body.brand;
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const location = "new delhi";
  const user_id = Math.floor((Math.random() * 1000) + 1);
  let imageurl = "";

  files.map(file=>imageurl+=file.filename+" ")
  
  const query = `INSERT INTO posts (brand,title,description,price,photos,location,user_id)
                    VALUES(
                      \'${brand}\',
                      \'${title}\',
                      \'${description}\',
                      \'${price}\',
                      \'${imageurl}\',
                      \'${location}\',
                      \'${user_id}\'
                      )`;
console.log(query);
  mysqlconn.query(query, (err, data) => {
    if (err) {
        console.log(err)
        res.send('Failed to save data to db');
    };
    res.send(data);
  });
  
});

module.exports = router;
