
const express = require('express'); // Add express
const app = express(); // Store express functions in app

const bodyParser = require('body-parser');

const ejs = require('ejs'); // View engine

const songs = require('./array.js').Array; // Get Songs Array

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs'); // Folder for views
app.use(express.static('public')); // Default Folder for assets

// Port for running app
app.listen('8080', function() {
  console.log('listening to port 8080');
});

app.get('/', function(req,res) {
  res.render('main.ejs'); // Webpage displayed at '/'
});

app.get('/train', function(req,res) {
  res.render('neural.ejs'); // Webpage displayed at '/train'
});

// If the user clicks play button
app.post('/play', urlencodedParser, function (req, res) {
  var _song = songs[Math.floor(Math.random()*songs.length)]; // Random Song
  var resp = JSON.stringify(_song);
  if (!req.body) return res.sendStatus(400)
  res.send(_song);

  var param = _song.tags;
  console.log(param.raw)
})
