import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className='App-container'>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
