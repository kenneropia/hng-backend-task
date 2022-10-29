const express = require('express'); 
/*
 Imports the express library.
 This is necessary to have an express server.
*/
const bodyParser = require('body-parser');  // Node.js body parsing middleware.

const app = express(); // Creates an app for your servers client

app.use(bodyParser.json()); // Express modules / packages
app.use(bodyParser.urlencoded({ extended: true })); // Express modules / packages


app.get('/',(req,res)=>{
  res.json(
{ "slackUsername": "aaronkenny", "backend": true, "age": 21, "bio":"Hi, my name is kenny, Im a frontend developer. nice to meet u" })
})

app.get('/*', (req, res) => {
	res.statusCode(404).send("not found")
})

app.listen(3000, () => console.log('server started'));
