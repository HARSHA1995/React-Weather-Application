var React = require("react");

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
      <h1>
        Example
      </h1>
      <p> Welcome to Example page </p>
    </div>
  )
};
module.exports= Examples;
