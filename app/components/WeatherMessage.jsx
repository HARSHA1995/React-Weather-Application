var React = require('react');
//var WeatherForm = require('WeatherForm');

// var WeatherMessage = React.createClass({
//   render: function(){
//     // var name = this.props.location;
//     // var temp = this.props.temp;
//
//     var {location, temp} = this.props;
//     return(
//       <div>
//          <h1> It is {temp} in {location} </h1>
//
//       </div>
//     );
//   }
// });

// var WeatherMessage = (props) => {
//   var {location,temp} = props;
//   return(
//     <div>
//        <h1> It is {temp} in {location} </h1>
//     </div>
//   )
// };


var WeatherMessage = ({location,temp}) => { // ({location,temp}) which is equal to props.location and props.temp.
// so, var location = this.props.location and var temp= this.props.temp;
  return(
    <div>
       <h1> It is {temp} in {location} </h1>
    </div>
  )
};

module.exports = WeatherMessage;
