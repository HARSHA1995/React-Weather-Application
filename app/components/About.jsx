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
           <h1> About </h1>
           <p> Welcome to About page </p>
         </div>
       )
};
module.exports = About;
