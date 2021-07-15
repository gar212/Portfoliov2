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

app.post('/send', (req, res) => {
  const output = `
	<p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'garetlamsmtp@gmail.com', // generated ethereal user
        pass: 'light008'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"GL Portfolio" garetlamsmtp@gmail.com', // sender address
      to: 'gartoyou@gmail.com', // list of receivers
      subject: 'New Message from Portfolio', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	  res.redirect("/");
  });
  });


// app.listen(3000, () => {
//   console.log('PortfolioV2 listening on port 3000!');
// });

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Portfolio Server Has Started!");
});