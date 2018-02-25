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

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);
    // alert(location);
    if(location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation; 
    }
  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              Reat Weather App
            </li>
            <li>
              <IndexLink to="/" activeStyle={{fontWeight: 'bold'}} activeClassName="active">Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeStyle={{fontWeight: 'bold'}} activeClassName="active">About</Link>
            </li>
            <li>
              <Link to="/examples" activeStyle={{fontWeight: 'bold'}} activeClassName="active">Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="search" placeholder="Search"></input>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
