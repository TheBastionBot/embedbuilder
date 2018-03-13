import React from 'react';

class Builder extends React.Component {
  render() {
    return(
      <div className="cell">
        <div id="builder-container">
          <form id="embed-builder">
            <div className="embed">
              <div className="embed-content">
                <div className="embed-content-inner">
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Builder;
