const axios = require('axios');
const imgdownload = require('./imgdownlod');
const postdataArr = [];
const getPostDetail = async ()=>{

    let postdataArr = [];
    
    for(let i = 0;i<5;i++){
        let url = `https://www.olx.in/api/relevance/feed?lang=en&location=5327293&page=${i+1}&user=1732341e0b2x2735f665`; 
      await axios.get(url)
       .then(res =>{
        let postSchema = {
        'title':res.data.data[0].title,
        'brand':res.data.data[0].parameters[0].value,
        'description':res.data.data[0].description,
        'price':res.data.data[0].price.value.display,
        'photos':imgdownload(res.data.data[0].images),
        'state':res.data.data[0].locations_resolved.ADMIN_LEVEL_3_name,
        'userid':Math.floor((Math.random() * 1000) + 1),
        };
           postdataArr.push(postSchema);
       })
       .catch(err => console.log(err));
       
    }
   return postdataArr;
};
module.exports = getPostDetail;
