var React = require('react');
var Nav = require('Nav');
// var Main = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <Nav/>
//         <h1>Main Components</h1>
//         {this.props.children}
//       </div>
//     );
//   }
// });
var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div clasName="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}
module.exports = Main;
