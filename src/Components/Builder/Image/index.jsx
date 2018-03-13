import React from 'react';
import { RegEx } from '../../constants';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: ''
    };
  }

  updateImageURL(event) {
    let classNames = event.target.className.trim().split(' ');
    if (event.target.value.length && !RegEx.imageURL.test(event.target.value)) {
      classNames.push('invalid');
    }
    else {
      classNames.splice(classNames.indexOf('invalid'), 1);
    }
    event.target.className = [ ...new Set(classNames) ].join(' ').trim();

    this.setState({
      imageURL: event.target.value
    });
  }

  render() {
    return(
      <div className = "embed-group embed-image">
        <div className = "embed-image-url">
          <input
            type = "url"
            name = "image:url"
            placeholder = "Image URL"
            value = {this.state.imageURL}
            onChange = {event => this.updateImageURL(event)}
          />
        </div>
      </div>
    );
  }
}

export default Image;
