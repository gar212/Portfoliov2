var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
  	nodemailer  = require('nodemailer'),
  	exphbs		= require('express-handlebars');

app.use(bodyParser.urlencoded({exteneded: false}));
app.use(bodyParser.json());

app.get ("/", function(req,res){
	res.render("home.ejs");
});

// Static folder
app.use(express.static(__dirname + "/public"));

app.listen(3000, () => {
  console.log('PortfolioV2 listening on port 3000!');
});

// app.listen(process.env.PORT, process.env.IP, function(){
//    console.log("Portfolio Server Has Started!");
// });