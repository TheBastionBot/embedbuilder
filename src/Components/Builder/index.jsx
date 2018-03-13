import React from 'react';
import Color from './Color';
import Author from './Author';
import Title from './Title';
import Description from './Description';
import Thumbnail from './Thumbnail';
import Fields from './Fields';
import Image from './Image';
import Footer from './Footer';

class Output extends React.Component {
  render() {
    return(
      <div className="cell">
        <div id="builder-container">
          <form id="embed-builder">
            <div className="embed">
              <div className="embed-content">
                <div className="embed-content-inner">

                  <Color />
                  <Author />
                  <Title />
                  <Description />
                  <Thumbnail />
                  <Fields />
                  <Image />

                </div>
              </div>

              <Footer />

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Output;
