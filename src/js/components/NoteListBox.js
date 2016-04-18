import React from 'react';
import ReactDOM from 'react-dom';
import NoteList from '../components/NoteList.js';
import NoteStores from '../stores/NoteStores.js';

export default class NoteListBox extends React.Component{
	constructor(){
		super();
		this.state = {
			notes : NoteStores.getNotes()
		}
	}
	onChange( notes ){
		this.setState({
			notes : notes
		});
	}
	componentDidMount(){
		this.unsubscribe = NoteStores.listen( this.onChange.bind(this) );
	}
	componentWillUnmount(){
		this.unsubscribe();
	}
	onAdd( e ){
		e.preventDefault();
		this.props.onAdd();
		this.refs.noteList.setActiveNote( null );
	}
	render(){
		return(
			<div className="col-md-12">
                <NoteList ref="noteList" notes={this.state.notes} onEdit={this.props.onEdit.bind(this)} /><br/>
                <div className="centered"><a onClick={this.onAdd.bind(this)} className="btn btn-info btn-lg">Add New</a></div>
            </div>
		)
	}
}