import React from 'react';
import ReactDOM from 'react-dom';
import Note from '../components/Note.js';

export default class NoteList extends React.Component{
	constructor(){
		super();
		this.state = {
			activeNoteId : null
		}
	}
	setActiveNote( id ){
		this.setState({ activeNoteId : id });
	}
	render(){
		let that = this;
		let notes = this.props.notes.concat().reverse();
		let noteNodes = notes.map(function( note ){
			return (
                <Note key={note._id} active={that.state.activeNoteId === note._id} note={note} onEdit={that.props.onEdit.bind(this)} onSelect={that.setActiveNote.bind(this)}/>
			);
		});
		return (
			<div className="list-group">
                {noteNodes}
            </div>
		)
	}
}