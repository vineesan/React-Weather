var React = require('react');
// var WeatherMessage = React.createClass({
//   render: function() {
//     var {temp, location} = this.props;
//     return (
//       <div>
//         <h3>It's it {temp} in {location}.</h3>
//       </div>
//     );
//   }
// });
// var WeatherMessage = (props) => {
  //state properties
  // var {temp, location} = props;
  //State properties we can pass as a Arguments code starts below
  var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3>It's it {temp} in {location}.</h3>
    </div>
  );
}
module.exports = WeatherMessage;
