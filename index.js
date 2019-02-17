var express=require("express");
var app=express();
var path=require("path");


var toDoController=require(path.join(__dirname,"controllers","toDoController.js"));
var insertData=require(path.join(__dirname,"databaseConfig","dbConfig.js"));
app.set("view engine","ejs");

app.use(express.static("public"));

toDoController(app);

app.listen(3000,function(){
  console.log("Server listening at port 3000...");
});
