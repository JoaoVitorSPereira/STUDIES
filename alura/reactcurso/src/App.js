import React, { Component } from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import CardList from './components/List';
import RegisterForm from './components/RegisterForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }
  createCard(title, text) {
    const newCard = { title, text };
    const newCardArray = [...this.state.cards, newCard];
    const newState = {
      cards: newCardArray,
    };
    this.setState(newState);
    console.log('foi');
  }
  render() {
    return (
      <ChakraProvider>
        <Flex>
          <RegisterForm createCard={this.createCard.bind(this)} />
          <CardList cards={this.state.cards} />
        </Flex>
      </ChakraProvider>
    );
  }
}

export default App;
