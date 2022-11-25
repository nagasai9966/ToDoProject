var express = require('express');
var app = express();
var bodyparser = require('body-parser');
let items=["Make Food" , "Buy Food" , "Eat Food"]
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
   var tooday=(today.toLocaleDateString("en-US",options));
   res.render("index",{KindOfDay:tooday , newItems:items});
});
app.post("/",function(req,res){
    var item=req.body.input1;
    items.push(item);
    res.redirect("/");
})
app.listen("3000",function(req,res){

});
