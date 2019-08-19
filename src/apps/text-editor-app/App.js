import React from 'react';
import './App.css';

console.error = (function(_error) {
  return function(message) {
    if (typeof message !== 'string' || message.indexOf('component is `contentEditable`') === -1) {
      _error.apply(console, arguments)
    }
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_text: '',
    };
  }

 placeCaretAtEnd(el) {
  el.focus();
  if (typeof window.getSelection != "undefined"
      && typeof document.createRange != "undefined") {
      var range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
  } else if (typeof document.body.createTextRange != "undefined") {
      var textRange = document.body.createTextRange();
      textRange.moveToElementText(el);
      textRange.collapse(false);
      textRange.select();
    }
  }

  save = () => {  
    let userVersion = document.querySelector('.user-text').innerHTML;
    localStorage.userEdit = userVersion;
    alert('content saved');
  }

  componentDidMount() {
    let userVersion = document.querySelector('.user-text');
    let userStorage = localStorage.getItem('userEdit');
    userVersion.innerHTML = userStorage;
    this.placeCaretAtEnd(userVersion);
  }

  componentWillMount() {
    window.addEventListener('keydown', (e) => {
      if ((e.key === 's' || e.key === 'S' ) && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        this.save();
        return false;
      } 
      return true;   
    });
  }

  bold = () => {
    document.execCommand('bold', false, '');
  }

  italic = () => {
    document.execCommand('italic', false, '');
  }

  underline = () => {
    document.execCommand('underline', false, '');
  }

  undo = () => {
    document.execCommand('undo', false, '');
  }

  redo = () => {
    document.execCommand('redo', false, '');
  }

  alignCenter = () => {
    document.execCommand('justifyCenter', false, '');
  }

  alignLeft = () => {
    document.execCommand('justifyLeft', false, '');
  }

  alignRight = () => {
    document.execCommand('justifyRight', false, '');
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="buttons">
            <img className="button" onClick={this.bold} src={require('./img/bold.svg')} alt="bold" />
            <img className="button" onClick={this.italic} src={require('./img/italicize-text.svg')} alt="italic" />
            <img className="button" onClick={this.underline} src={require('./img/underline-text-button.svg')} alt="underline" />
            <img className="button" onClick={this.undo} src={require('./img/undo-arrow.svg')} alt="undo" />
            <img className="button" onClick={this.redo} src={require('./img/redo-arrow.svg')} alt="redo" />    
            <img className="button" onClick={this.alignLeft} src={require('./img/align-to-left.svg')} alt="align left" />
            <img className="button" onClick={this.alignCenter} src={require('./img/align-center.svg')} alt="align center" />
            <img className="button" onClick={this.alignRight} src={require('./img/align-to-right.svg')} alt="align right" />
            <button className="button-save btn btn-primary" onClick={this.save}>Save</button>
          </div>
            <div className="background" >
              <div onKeyUp={this.check} 
              onClick={this.check}
              className="user-text"
              contentEditable="true" 
              >
                {this.state.current_text}
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

