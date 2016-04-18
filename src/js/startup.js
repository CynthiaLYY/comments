import React from 'react';
import ReactDOM from 'react-dom';
import NoteApp from './components/NoteApp.js';
//import QueryResult from './components/QueryResult.js';

window.main = () => {
    ReactDOM.render(<NoteApp/>,document.getElementById('panel-body'));
}

