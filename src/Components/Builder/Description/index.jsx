import React from 'react';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    };
  }

  updateDescription(event) {
    this.setState({
      description: event.target.value
    });
  }

  render() {
    return(
      <div className = "embed-group embed-description">
        <textarea
          name = "description"
          placeholder = "Description"
          maxLength = "2000"
          rows = "5"
          value = {this.state.description}
          onChange = {event => this.updateDescription(event)}
        >
        </textarea>
      </div>
    );
  }
}

export default Description;
