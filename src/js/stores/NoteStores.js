import Reflux from 'reflux';
import NoteActions from '../actions/NoteActions.js';

var _notes = [];
var NoteStores = Reflux.createStore({
	init: function(){
		this.listenTo( NoteActions.createNote , this.onCreate );
		this.listenTo( NoteActions.editNote , this.onEdit );
	},
	onCreate: function( note ){
		_notes.push( note );
		this.trigger( _notes );
	},
	onEdit: function( note ){
		for( let i=0 ; i<_notes.length ; i++){
			if( _notes[i]._id === note._id ){
				_notes[i].text = note.text;
				this.trigger( _notes );
				break;
			}
		}
	},
	getNotes: function(){
		return _notes;
	},
	getNote: function( id ){
		for( let i=0 ; i<_notes.length ; i++){
			if( _notes[i].id === id){
				return _notes[i];
			}
		}
	}
});

module.exports = NoteStores;
