import React from 'react';
import { RegEx } from '../../constants';

class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      URL: '',
      iconURL: ''
    };
  }

  updateName(event) {
    this.setState({
      name: event.target.value
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

  updateIconURL(event) {
    let classNames = event.target.className.trim().split(' ');
    if (event.target.value.length && !RegEx.imageURL.test(event.target.value)) {
      classNames.push('invalid');
    }
    else {
      classNames.splice(classNames.indexOf('invalid'), 1);
    }
    event.target.className = [ ...new Set(classNames) ].join(' ').trim();

    this.setState({
      iconURL: event.target.value
    });
  }

  render() {
    return(
      <div className = "embed-group embed-author">
        <div className = "embed-author-icon">
          <input
            type = "url"
            name = "author:icon_url"
            placeholder = "Author Icon URL"
            value = {this.state.iconURL}
            onChange = {event => this.updateIconURL(event)}
          />
        </div>
        <div className="embed-author-name">
          <input
            type = "text"
            name = "author:name"
            placeholder = "Author Name"
            maxLength = "256"
            value = {this.state.name}
            onChange = {event => this.updateName(event)}
          />
        </div>
        <div className="embed-author-url">
          <input
            type = "url"
            name = "author:url"
            placeholder = "Author URL"
            value = {this.state.URL}
            onChange = {event => this.updateURL(event)}
          />
        </div>
      </div>
    );
  }
}

export default Author;
