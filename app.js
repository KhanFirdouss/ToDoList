const express= require("express");
const bodyParser= require("body-parser");
//const { compile } = require("ejs");
const date= require(__dirname + "/date.js");
const app=express();

const items=["Eat" , "Sleep" ,"Pray"];
const workItem=["code"];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


 
app.get("/", function(req, res){
    const day = date.getDate();
res.render("list", {listTitle: day , newItem: items} );
});

app.post("/",function(req,res){
const itemName= req.body.newItem ;
if(req.body.list === "Work"){
    workItem.push(itemName);
    res.redirect("/work");
}
else{
    items.push(itemName);
    res.redirect("/");
}

});

app.get("/work",function(req,res){
    res.render("list", {listTitle: "Work List" , newItem: workItem} );
});

//app.post("/work",function(req,res){
//let itemName=req.body.newItem ;
//workItem.push(itemName);
//});



app.listen(3000 ,function(){
    console.log("Thes server is running on port 3000");
});