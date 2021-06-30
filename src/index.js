import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'Hello from react also');

ReactDOM.render(template, document.getElementById('app'));