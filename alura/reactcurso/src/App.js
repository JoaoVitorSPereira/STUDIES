import React, { Component } from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import CardList from './components/List';
import CategoryList from './components/CategoryList';
import RegisterForm from './components/RegisterForm';
import Categories from './data/Category';
import CardArray from './data/Cards';

class App extends Component {
  constructor() {
    super();
    this.categories = new Categories();
    this.cards = new CardArray();
  }

  render() {
    return (
      <ChakraProvider>
        <Flex>
          <RegisterForm
            categories={this.categories}
            createCard={this.cards.addCard.bind(this.cards)}
          />
          <Flex>
            <CategoryList
              addCategory={this.categories.addCategory.bind(this.categories)}
              categories={this.categories}
            />
            <CardList
              cards={this.cards}
              deleteCard={this.cards.deleteCard.bind(this.cards)}
            />
          </Flex>
        </Flex>
      </ChakraProvider>
    );
  }
}

export default App;
