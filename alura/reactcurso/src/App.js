import React, { Component } from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import ListaDeNotas from './components/List';
import RegisterForm from './components/RegisterForm';

class App extends Component {
  render() {
    return (
      <ChakraProvider>
        <Flex>
          <RegisterForm />
          <ListaDeNotas />
        </Flex>
      </ChakraProvider>
    );
  }
}

export default App;
