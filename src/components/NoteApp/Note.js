import React, { Component } from "react";

export default class Note extends Component {

    removeNote(id){
        this.props.onRemove(id)
    }
  render() {
    let { id, title, color } = this.props;
    return (
      <div
        className="card shadow-sm rounded"
        style={{ backgroundColor: color }}
        onClick={this.removeNote.bind(this,id)}
        >
        <p className="card-text p-3">{title}</p>
      </div>
    );
  }
}
