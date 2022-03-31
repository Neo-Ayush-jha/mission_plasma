var express = require("express")
var app = express();
var path = require('path')
var bodyParser = require('body-parser')
var router = require("./router/web")
var db = require("./config/db")

var connection = db("mongodb://localhost/mission_plasma")

var session = require("express-session")
app.use(session({
    secret:"finding plasma",
    resave:false,
    saveUninitialized:false,
}))

var urlEncoded = bodyParser.urlencoded({extended:false})

app.use(urlEncoded)
app.use("/",router);

app.set("view engine","pug")
app.set("views","./public/view");


app.listen(8081);