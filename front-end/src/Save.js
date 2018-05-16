import React, { Component } from 'react';
import './styles.css';
// Save button compoenent

class Save extends Component{
  constructor(props){
    super(props);
    this.press = this.press.bind(this);
  }

  // Triggers when button is pressed
  press(){
    //console.log(this.props.path);
    let FileSaver = require('file-saver');
    let file = new File([this.props.path], {type: "audio/mpeg"});
    // Use the filename after the last "/" in the url
    let fileName = this.props.path.substring(this.props.path.lastIndexOf("/") + 1);
    FileSaver.saveAs(file, fileName);
  }

  // Renders button which triggers press
  render(){
    return(
      <div>
        <button onClick={this.press}>Save Song</button>
      </div>
    )
  }
}

export default Save;