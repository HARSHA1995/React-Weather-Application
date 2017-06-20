var React = require('react');
var {Link, IndexLink} = require('react-router');

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

// var nav = (props) => {
//   return(
//     <div>
//         <h1> Nav Component </h1>
//         <IndexLink to="/">Get Weather</IndexLink>
//         <Link to="/About"> About </Link>
//         <Link to="/Examples"> Examples </Link>
//     </div>
//   )
// };

var nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    alert("Not yet Wired up!");
  },
  render: function(){
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className = "menu-text"> React Weather App </li>
          <li>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
          </li>
          <li>
            <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
          </li>
          <li>
            <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <form onSubmit={this.onSearch}>
          <ul className="menu">
            <li>
              <input type="search" placeholder="Search weather by city"/>
            </li>
            <li>
              <input type="submit" className="button" value="Get Weather"/>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
});
module.exports = nav;
