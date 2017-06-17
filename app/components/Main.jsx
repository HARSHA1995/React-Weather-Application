var React = require("react");
var Nav = require('nav');
var Weather = require('Weather');

// var main = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <Nav/>
//         <h1> Main Component </h1>
//         {this.props.children}
//         {/*  It renders weather component, about component and children component Here */}
//       </div>
//     );
//   }
// });

var main  = (props) => {
  return(
    <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {props.children}
            {/*  It renders weather component, about component and examples component Here */}
          </div>
        </div>
    </div>
  )
};
module.exports = main;
