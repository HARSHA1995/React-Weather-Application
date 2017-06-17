var React = require("react");
var {Link} = require('react-router');
// var Examples = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h1>Examples Component</h1>
//       </div>
//     );
//   }
// });

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-centered">
        Example
      </h1>
      <p> Here are few example locations to try up </p>
      <ul>
        <li>
          <Link to="/?location=Hyderabad"> Hyderabad, INDIA </Link>
          {/* It goes to home page i.e, weather page becasue we gave forward slash(/) */}
        </li>
        <li>
          <Link to="/?location=Cincinnati"> Cincinnati, USA</Link>
          {/* It goes to home page i.e, weather page becasue we gave forward slash(/) */}
        </li>
      </ul>
    </div>
  )
};
module.exports= Examples;
