import React from 'react';
import { RegEx } from '../../constants';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      iconURL: ''
    };
  }

  updateText(event) {
    this.setState({
      text: event.target.value
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
      <div className = "embed-group embed-footer">
        <div className="embed-timestamp">
          <label>
            <input
              name = "timestamp"
              type = "checkbox"
            />
            Add Timestamp
          </label>
        </div>
      </div>
    );
  }
}

export default Footer;
