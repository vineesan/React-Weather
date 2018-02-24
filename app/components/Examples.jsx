var React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h2>Examples Components</h2>
//       </div>
//     );
//   }
// });
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples!</h1>
      <p>Here few examples to try out:</p>
      <ul>
        <li>
          <Link to="/?location=Philadelphia">Philadelphia, PA</Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio, Brazil</Link>
        </li>
      </ul>
    </div>
  );
}
module.exports = Examples;
