import React, { Component } from "react";
import Note from "./Note";
import ColorBox from "./ColorBox";

export default class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        "#fff",
        "#FFD37F",
        "#FFFA81",
        "#D5FA80",
        "#78F87F",
        "#79FBD6",
        "#79FDFE",
        "#7AD6FD",
        "#7B84FC",
        "#D687FC",
        "#FF89FD",
      ],
      notes: [],
      noteTitle: "",
      inputColor: "#fff",
    };

    this.changeColor = this.changeColor.bind(this);
    this.noteTitleHandler = this.noteTitleHandler.bind(this)
    this.addNoteHandler = this.addNoteHandler.bind(this)
    this.removeNoteHandler = this.removeNoteHandler.bind(this)
    this.emptyInputsHandler = this.emptyInputsHandler.bind(this)
  }

  changeColor(color) {
    this.setState({
      inputColor: color,
    });
  }

  noteTitleHandler(event){
    this.setState({
        noteTitle: event.target.value
    })
  }

  addNoteHandler(){
    if(this.state.noteTitle.length){
        let newNote = {
            id: this.state.notes.length + 1,
            title: this.state.noteTitle,
            color: this.state.inputColor
        }

        this.setState(prevState => {
            return {notes: [...prevState.notes,newNote],noteTitle: '',inputColor:'#fff'}
        })
    }
  }

  removeNoteHandler(mainId){
    console.log(mainId)

    let FillteredNotes = this.state.notes.filter(note => note.id !== mainId)

    this.setState({
        notes:FillteredNotes
    })
  }

  emptyInputsHandler(){
    this.setState({
        noteTitle: '',
        inputColor: '#fff'
    })
  }

  render() {
    return (
      <>
        <div>
          <section id="home">
            <div className="container">
              <div className="header upper">Note App</div>

              <br />
              <br />
              <div className="flex row-gt-sm">
                <div className="flex flex-50-gt-sm">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                    <input
                      id="input-field"
                      className="form-control"
                      type="text"
                      style={{ backgroundColor: this.state.inputColor }}
                      placeholder="Something here..."
                      value={this.state.noteTitle}
                      onChange={(event) => this.noteTitleHandler(event)}
                    />
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                    <div id="color-select">
                      {this.state.colors.map((color) => (
                        <ColorBox
                          key={color}
                          color={color}
                          onChangeColor={this.changeColor}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                    <button
                      id="btn-save"
                      type="button"
                      className="btn btn-outline-info"
                      onClick={this.addNoteHandler}
                    >
                      <span className="fa fa-plus"></span>
                    </button>
                    <button
                      id="btn-delete"
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={this.emptyInputsHandler}
                    >
                      <span id="btn-icon" className="fa fa-eraser"></span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex row-gt-sm">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="container">
                    <div className="row">
                      <div
                        id="listed"
                        className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns"
                      >
                        {this.state.notes.length ? this.state.notes.map(note => (
                            <Note key={note.id} {...note} onRemove={this.removeNoteHandler}/>
                        )): ''}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
