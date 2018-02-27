var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var Time = require('Time');
var Counter = require('Counter');
//Loading Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
//App Css
require('style!css!sass!applicationStyles');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <Route path="time" component={Time}/>
      <Route path="counter" component={Counter}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
