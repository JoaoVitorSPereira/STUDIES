import React, { Component } from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import ListaDeNotas from './components/List';
import RegisterForm from './components/RegisterForm';

class App extends Component {
  createCard(title, text) {}
  render() {
    return (
      <ChakraProvider>
        <Flex>
          <RegisterForm createCard={this.createCard} />
          <ListaDeNotas />
        </Flex>
      </ChakraProvider>
    );
  }
}

export default App;
