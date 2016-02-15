var React = require('react'),
    ReactDOM = require('react-dom'),
    Tabs = require('./tabs'),
    Clock = require('./clock'),
    Weather = require('./weather'),
    Autocomplete = require('./autocomplete');

var tabs = ['Home', 'About', 'Contact'];
var content = ['This is the home page',
               'This is the about page',
               'This is the contact page'];

var users = ['Allison', 'Albright', 'Aubrey', 'Brittany', 'Candice',
              'Charlotte', 'David', 'Dylan',
              'Earl', 'Rick', 'Morty', 'Walter', 'Jessie'];

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <div>
      <Tabs items={tabs} content={content}/>
      <Clock/>
      <Weather/>
      <Autocomplete items={users}/>
    </div>,
  document.getElementById('main'));
});
