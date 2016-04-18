import React from 'react';
import ReactDOM from 'react-dom';
import NoteActions from '../actions/NoteActions.js';
import NoteStores from '../stores/NoteStores.js';
import TextArea from '../components/TextArea.js';

export default class NoteCreationBox extends React.Component{
	handleSave( noteText , id ){
		if( id ){
			NoteActions.editNote({ _id : id , text : noteText });
		}else{
			NoteActions.createNote({ _id : Date.now() , text : noteText });
		}
	}
	render(){
		var note;
		if( this.props.id ){
			note = NoteStore.getNote( this.props.id );
		}
		return (
			<div className="col-md-12">
                <TextArea onSave={this.handleSave.bind(this)} id={this.props.id} ref="textBox" noteText={note ? note.text : ''} />
            </div>
		)
	}
}