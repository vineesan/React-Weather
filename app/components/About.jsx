var React = require('react');
// var About = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h2>About Component</h2>
//       </div>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h2>About!</h2>
      <p>Welcome to About page</p>
    </div>
  );
};
module.exports = About;
