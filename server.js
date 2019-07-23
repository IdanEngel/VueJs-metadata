const express = require("express");
const urlMetadata = require('url-metadata')
const path = require('path')
const app =express();
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/',function(req,res){
    urlMetadata(req.body.url).then(
      function (metadata) { // success handler
      console.log(metadata)
      res.send(metadata)
      },
      function (error) { // failure handler
        console.log(error)
        res.end()
      })

});




app.listen(3000,function(){
  console.log("Yo yo i'm running here!");
});
