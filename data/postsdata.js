const axios = require('axios');
const mysqlconn = require('../config/sqlconn');
const imgdownload = require('./imgdownlod');
const postdataArr = [];
const getPostDetail = async ()=>{

    let postdataArr = [];
    
    for(let i = 0;i<50;i++){
        let url = `https://www.olx.in/api/relevance/feed?lang=en&location=5327293&page=${i+1}&user=1732341e0b2x2735f665`; 
      await axios.get(url)
       .then(res =>{
        let postSchema = {
        'title':res.data.data[0].title,
        'brand':res.data.data[0].parameters[0].value == undefined?"":res.data.data[0].parameters[0].value,
        'description':res.data.data[0].description,
        'price':res.data.data[0].price.value.raw,
        'imageurl':imgdownload(res.data.data[0].images),
        'location':res.data.data[0].locations_resolved.ADMIN_LEVEL_3_name,
        'userid':Math.floor((Math.random() * 1000) + 1),
        };
           postdataArr.push(postSchema);
           console.log(postSchema.title);
       })
       .catch(err => console.log("failed fetching posts"));
       
    }
    
 //Adding post to mysql
postdataArr.map(post=>{
    const query = `INSERT INTO posts (brand,title,description,price,photos,location,user_id)
    VALUES(
      \'${post.brand}\',
      \'${post.title}\',
      \'${post.description}\',
      \'${post.price}\',
      \'${post.imageurl}\',
      \'${post.location}\',
      \'${post.userid}\'
      )`;


    mysqlconn.query(query, (err, data) => {
        if (err) 
        return console.log(err);
        console.log(query+"added posts");
        
        });
})


   return postdataArr;
};
module.exports = getPostDetail;
