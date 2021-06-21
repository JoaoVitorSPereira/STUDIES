import React, { Component } from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import CardList from './components/List';
import CategoryList from './components/CategoryList';
import RegisterForm from './components/RegisterForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      categories: [],
    };
  }

  createCard(title, text, category) {
    const newCard = { title, text, category };
    const newCardArray = [...this.state.cards, newCard];
    const newState = {
      cards: newCardArray,
    };
    this.setState(newState);
  }

  addCategory(categoryName) {
    const newCategoriesArray = [...this.state.categories, categoryName];
    const newEstate = { ...this.state, categories: newCategoriesArray };
    this.setState(newEstate);
  }

  deleteCard(index) {
    let arrayCards = this.state.cards;
    arrayCards.splice(index, 1);
    this.setState({ cards: arrayCards });
  }

  render() {
    return (
      <ChakraProvider>
        <Flex>
          <RegisterForm
            categories={this.state.categories}
            createCard={this.createCard.bind(this)}
          />
          <Flex>
            <CategoryList
              addCategory={this.addCategory.bind(this)}
              categories={this.state.categories}
            />
            <CardList
              cards={this.state.cards}
              deleteCard={this.deleteCard.bind(this)}
            />
          </Flex>
        </Flex>
      </ChakraProvider>
    );
  }
}

export default App;
