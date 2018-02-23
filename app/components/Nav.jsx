var React = require('react');
var {Link, IndexLink} = require('react-router')
// var Nav = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h2>Nav Components</h2>
//         <IndexLink to="/" activeStyle={{fontWeight: 'bold'}} activeClassName="active">Get Weather</IndexLink>
//         <Link to="/about" activeStyle={{fontWeight: 'bold'}} activeClassName="active">About</Link>
//         <Link to="/examples" activeStyle={{fontWeight: 'bold'}} activeClassName="active">Examples</Link>
//       </div>
//     );
//   }
// });

var Nav = () => {
  return (
    <div>
      <h2>Nav Components</h2>
      <IndexLink to="/" activeStyle={{fontWeight: 'bold'}} activeClassName="active">Get Weather</IndexLink>
      <Link to="/about" activeStyle={{fontWeight: 'bold'}} activeClassName="active">About</Link>
      <Link to="/examples" activeStyle={{fontWeight: 'bold'}} activeClassName="active">Examples</Link>
    </div>
  );
}

module.exports = Nav;
