import React from 'react';
import { RegEx } from '../../constants';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnailURL: ''
    };
  }

  updateThumbnailURL(event) {
    let classNames = event.target.className.trim().split(' ');
    if (event.target.value.length && !RegEx.imageURL.test(event.target.value)) {
      classNames.push('invalid');
    }
    else {
      classNames.splice(classNames.indexOf('invalid'), 1);
    }
    event.target.className = [ ...new Set(classNames) ].join(' ').trim();

    this.setState({
      thumbnailURL: event.target.value
    });
  }

  render() {
    return(
      <div className = "embed-group embed-thumbnail">
        <div className = "embed-thumbnail-url">
          <input
            type = "url"
            name = "thumbnail:url"
            placeholder = "Thumbnail URL"
            value = {this.state.thumbnailURL}
            onChange = {event => this.updateThumbnailURL(event)}
          />
        </div>
      </div>
    );
  }
}

export default Thumbnail;
