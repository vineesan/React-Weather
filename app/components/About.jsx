var React = require('react');
var About = React.createClass({
  render: function() {
    return (
      <div>
        <h2 className="text-center page-tilte">About Component</h2>
      </div>
    );
  }
});

// var About = (props) => {
//   return (
//     <div>
//       <h1 className="text-center page-tilte">About!</h1>
//       <p>It is my first React Weather Application built in complite React</p>
//       <p>Here I some of the tools I Used:</p>
//       <ul>
//         <li>
//           <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.
//         </li>
//         <li>
//           <a href="http://openweathermap.org">Open Weather Map</a> - I Used Open Weather Map to search for weather data by city name.
//         </li>
//       </ul>
//     </div>
//   );
// };
module.exports = About;
