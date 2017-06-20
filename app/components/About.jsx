var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h1>About Component</h1>
//       </div>
//     );
//   }
// });


// var About = function(props) {
//    return(
//          <div>
//            <h1> About Component </h1>
//          </div>
//        )
// };


var About = (props) => {
   return(
         <div>
           <h1 className = "text-center page-title"> About </h1>
           <p> This is a Weather Application which is build on React and Foundation Framework. </p>
           <p>Here are some of the tools I used:</p>
           <ul>
             <li>
               <a href="https://facebook.github.iO/react">React</a> = This was the JavaScript Framework used.
             </li>
             <li>
               <a href="http://openweathermap.org">Open Weather Map</a> = I used Open Weather Map to search for weather data by city name.
             </li>
           </ul>
         </div>
       )
};


module.exports = About;
