var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Clock = require('Clock');

describe('Clock', () => {
  it('Should exist', () => {
    expect(Clock).toExist();
  });
  describe('render', () => {
    it('Should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      expect(actualText).toBe('');
    });
  });
  describe('formateSeconds', () => {
    it('Should formate Seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formateSeconds(seconds);
      expect(actual).toBe(expected);
    });
    it('Should formate min/sec less than one', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formateSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });
});
