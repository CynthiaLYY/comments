import React from 'react';
import ReactDOM from 'react-dom';
import NoteListBox from '../components/NoteListBox.js';
import NoteCreationBox from '../components/NoteCreationBox.js';

export default class NoteApp extends React.Component{
	constructor(){
		super();
		this.state = {
			id : null
		}
	}
	onEdit( id ){
		this.setState({ currentlyEdited : id });
	}
	onAdd(){
		ReactDOM.findDOMNode(this.refs.noteBox.refs.textBox.refs.textArea).focus();
		this.setState({ currentlyEdited : null });
	}
	render(){
		return (
			<div className="container">
                <div className="row header">
                    <div className="page-header">
                        <h3>React Comments List</h3>
                    </div>
                </div>
                <div className="row">
                    <NoteCreationBox id={this.state.currentlyEdited} ref="noteBox"/>
                    <NoteListBox onEdit={this.onEdit.bind(this)} onAdd={this.onAdd.bind(this)}/>
                </div>
            </div>
		)
	}
}