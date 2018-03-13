import React from 'react';
import { RegEx } from '../../constants';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      URL: ''
    };
  }

  updateTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  updateURL(event) {
    let classNames = event.target.className.trim().split(' ');
    if (event.target.value.length && !RegEx.URL.test(event.target.value)) {
      classNames.push('invalid');
    }
    else {
      classNames.splice(classNames.indexOf('invalid'), 1);
    }
    event.target.className = [ ...new Set(classNames) ].join(' ').trim();

    this.setState({
      URL: event.target.value
    });
  }

  render() {
    return(
      <div className = "embed-group embed-title">
        <div className = "embed-title-text">
          <input
            type = "text"
            name = "title"
            placeholder = "Title"
            maxLength="256"
            value = {this.state.title}
            onChange = {event => this.updateTitle(event)}
          />
        </div>
        <div className="embed-title-url">
          <input
            type="url"
            name="url"
            placeholder="URL"
            value = {this.state.URL}
            onChange = {event => this.updateURL(event)}
          />
        </div>
      </div>
    );
  }
}

export default Title;
