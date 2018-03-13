import React from 'react';
import { ChromePicker } from 'react-color';

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#4f545c',
      intColor: 0,
      displayColorPicker: false
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChangeComplete = (color, event) => {
    this.setState({
      color: color.hex,
      intColor: 256 * 256 * Math.round(color.rgb.r) + 256 * Math.round(color.rgb.g) + Math.round(color.rgb.b)
    });
    document.getElementById('builder-container').style['border-left'] = `5px solid ${color.hex}`;
  }

  render() {
    return(
      <div className="embed-group embed-color">
        <input
          id = "color"
          type = "text"
          name = "color"
          placeholder = "Embed Color"
          value = { this.state.intColor }
          onClick = { this.handleClick }
          style = {{
            cursor: 'pointer'
          }}
          readOnly
        />

        {
          this.state.displayColorPicker ?
            <div
              style = {{
                position: 'absolute',
                zIndex: 2
              }}
            >
              <div
                style={{
                  position: 'fixed',
                  top: '0px',
                  right: '0px',
                  bottom: '0px',
                  left: '0px',
                  backgroundColor: 'rgba(0, 0, 0, .15)'
                }}
                onClick={ this.handleClose }/>
              <ChromePicker
                color = { this.state.color }
                disableAlpha = { true }
                onChangeComplete = { this.handleChangeComplete }
              />
            </div>
          : null
        }
      </div>
    );
  }
}

export default Color;
