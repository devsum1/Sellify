const download = require('image-downloader');

const downloadimg = (linkarr)=>{
    let combineUrl = "";
    linkarr.map(async (link)=>{
        const ufilename = `${link.id}-${Date.now()}.jpg`;
        const options = {
            url: link.url,
            dest: `C:/Users/Sumit bhandari/Desktop/sellify/public/uploads/${ufilename}` 
          }
          combineUrl+=ufilename+" ";
        
          await download.image(options)
            .then(({ filename }) => {
              
            //   console.log('Saved to',filename);  
            })
            .catch((err) => console.error(err))
    })
   return  combineUrl;
};

module.exports = downloadimg;