var bodyParser=require("body-parser");

var urlEncodedParser=bodyParser.urlencoded({ extended: false });

var data=[{item:'Sarani'},{item:"Bunty"},{item:"Sid"}];
module.exports=function(app){




app.get("/todo",function(request,response){
response.render("toDo",{todos:data});

});

app.post("/todo",urlEncodedParser,function(request,response){

data.push(request.body);

response.json(data);
});

app.delete("/todo/:item",function(request,response){
data=data.filter(function(todo){
  return todo.item.replace(/ /g,'-')!==request.params.item;
});
response.json(data);
});



};
