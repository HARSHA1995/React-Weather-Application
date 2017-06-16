var React = require('react');
var {Link} = require('react-router');

// instead of using <Link to> tag, we can use <a href="" > tag but in <Link to> tag we can customize in our way by adding different styles.

// var nav = React.createClass({
//   render: function(){
//     return(
//     <div>
//       <h1> Nav Component </h1>
//       <Link to="/">Get Weather</Link>
//       <Link to="/About"> About </Link>
//       <Link to="/Examples"> Examples </Link>
//     </div>
//     );
//   }
// });

var nav = (props) => {
  return(
    <div>
        <h1> Nav Component </h1>
        <Link to="/">Get Weather</Link>
        <Link to="/About"> About </Link>
        <Link to="/Examples"> Examples </Link>
    </div>
  )
};
module.exports = nav;
