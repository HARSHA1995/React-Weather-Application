var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000; //For heroku to start

//our weather map api works on http but not HTTPS. so our application for free version
// we gonna redirect https traffic to http.
app.use(function(req,res,next){  //Express middleware
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  }else{
    res.redirect('http://' + req.hostname + req.url);
  }
});
app.use(express.static('public'));
app.listen(PORT, function(){
  console.log("Express server is up on port " + PORT);
});
