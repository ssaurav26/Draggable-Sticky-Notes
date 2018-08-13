import React, { Component } from 'react';
import Note from './Note';

class Board extends Component{
  constructor() {
    super();
    this.state = {
      // notes : [{"id":0,"note": "New Notes"}],
      notes :  [],
    };
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.nextId = this.nextId.bind(this);
    this.eachNote = this.eachNote.bind(this);
  }
componentWillMount (){
  if(localStorage.getItem('notes') != null){
    var data = localStorage.getItem("notes");
    this.setState({notes : JSON.parse(data)});
  }

  if(localStorage.getItem('notes') == null){
 this.setState({notes: [{"id":5000,"note": "New Notes"}]});
 localStorage.setItem('notes',JSON.stringify([{"id":5000,"note": "New Notes"}]));

}

}

add(text){
  var notesData = this.state.notes;
  notesData.push({
    id: this.nextId(),
    note: text
  });
this.setState({notes: notesData});
localStorage.setItem('notes',JSON.stringify(this.state.notes));
}

update(newText,i){
  var updateNotesData = this.state.notes;
  updateNotesData[i].note = newText;
  this.setState({notes: updateNotesData});
  localStorage.setItem('notes', JSON.stringify(this.state.notes));
};

remove(i){
  var removeNotesData = this.state.notes;
  removeNotesData.splice(i, 1);
  this.setState({ notes: removeNotesData});
  localStorage.setItem('notes', JSON.stringify(this.state.notes));
};

eachNote(note,i){
  return(
    <Note key={note.id}
          index= {i}
          onChange = {this.update}
          onRemove = {this.remove}
          >{note.note}</Note>
  )

}

nextId(){
  this.uniqueId = this.uniqueId || 0;
  return this.uniqueId++;
}

render(){
  return(
    <div className = "board">
    {this.state.notes.map(this.eachNote)}
    <button className="btn btn-sm btn-success glyphicon glyphicon-plus" onClick={this.add.bind(null,"New Note")}></button>
  </div>

  )
}
};
export default Board;
