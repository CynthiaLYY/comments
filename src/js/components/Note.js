import React from 'react';
import ReactDOM from 'react-dom';

export default class Note extends React.Component{
	handleEdit( id , e ){
		e.preventDefault();
		this.props.onEdit( id );
		this.props.onSelect( id );
	}
	render(){
		var note = this.props.note;

        var title = note.text.length >= 20 ? note.text.substring(0,20) : note.text;

        var className = this.props.active ? 'active' : null;

        return (
            <a href="#" className={'list-group-item '+className} onClick={this.handleEdit.bind(this)}>{title}</a>
        )
	}
}