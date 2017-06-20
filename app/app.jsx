var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App css
require('style!css!applicationStyles')

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather}/> //Why we wrote IndexRoute instead of only Route because we want to render Weather component in Main component only.We get when we type localhost:3000/#/Main
      <Route path="About" component={About}/> //Here we wrote Route instead of IndexRoute because we dont want to render in the main component and we want to get only we type localhost:3000/#/About
      <Route path="Examples" component={Examples}/>
    </Route>
  </Router>,
  document.getElementById('one')
);



//Weather and About component are present inside the Main component. But if you want to render
//Weather component we can simply type localhost:3000/#/Main
// But for React Component we should type localhost:3000/#/About
