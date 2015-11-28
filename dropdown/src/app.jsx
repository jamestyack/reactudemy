var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert',
  items: ['Trifle', 'Apple Pie', 'Peach Cobbler', 'Ice Cream Sandwich']
};

var element = React.createElement(Dropdown, options);

React.render(element, document.querySelector('.container'));
