import React from 'react';
import ReactDOM from 'react-dom';
import NoteStores from '../stores/NoteStores.js';

export default class TextArea extends React.Component{
	constructor(){
		super();
		this.state = {
			noteText : ''
		}
	}
	handleChange( e ){
		let noteText = e.target.value;
		this.setState({ noteText : noteText });
	}
	handleSave(){
		let noteText = this.state.noteText;
		let id = this.props.id;
		this.props.onSave( noteText , id );
		if( !id ){
			ReactDOM.findDOMNode(this.refs.textArea).value = '';
			this.setState({ noteText : '' });
		}
	}
	componentWillReceiveProps( nextProps ){
		this.setState({ noteText : nextProps.noteText });
		if( !nextProps.id ){
			ReactDOM.findDOMNode(this.refs.textArea).focus();
		}
	}
	render(){
		return (
			<div>
                <textarea className="form-control" ref="textArea" cols="100" rows="10" value={this.state.noteText} onChange={this.handleChange.bind(this)}></textarea><br/>
                <input type="button" className="btn btn-success btn-lg" value="Save" onClick={this.handleSave.bind(this)}/>
            </div>
		)
	}
}