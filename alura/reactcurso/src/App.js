import React, { Component } from 'react';
import ListaDeNotas from './components/List';
import RegisterForm from './components/RegisterForm';

class App extends Component {
  render() {
    return (
      <>
        <RegisterForm />
        <ListaDeNotas />
      </>
    );
  }
}

export default App;
