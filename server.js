var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

// our weather map api works on http but not HTTPS. so our application For free version we gonna redirect https traffic to http.
//Express middleware (app.use(function (req, res, next))
app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
