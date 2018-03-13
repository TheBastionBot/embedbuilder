import React from 'react';
import Builder from '../Builder';
import Output from '../Output';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Builder />
        <Output />
      </main>
    );
  }
}

export default Main;
