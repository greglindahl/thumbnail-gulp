var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', // What should show up on the button to open/close the dropdown
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Chocolate Cake'
  ]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.target'));
