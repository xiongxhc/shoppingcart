import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Footer from './components/Footer';

import data from '../db/products.json'

class App extends React.Component {

  constructor() {
    super();
    this.state = { 
      products: data.Products,
      filter: ""
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Grid />
        <Footer />
      </div>
    );
  }
}

export default App;
