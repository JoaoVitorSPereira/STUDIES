import React, { Component } from 'react';
import { SimpleGrid, Flex } from '@chakra-ui/react';
import Card from '../Card';

class CardList extends Component {
  constructor() {
    super();
    this.state = { cards: [] };
    this._newCards = this._newCards.bind(this);
  }
  componentDidMount() {
    this.props.cards.subscribe(this._newCards);
  }

  componentWillUnmount() {
    this.props.cards.unsubscribe(this._newCards);
  }

  _newCards(cards) {
    this.setState({ ...this.state, cards });
  }
  render() {
    return (
      <SimpleGrid
        columns={4}
        spacing={2}
        maxHeight='350px'
        mt='20px'
        pl='20px'
        pr='20px'
      >
        {this.state.cards.map((card, index) => {
          return (
            <Flex margin='12px' key={index} flexDirection='column'>
              <Card
                index={index}
                deleteCard={this.props.deleteCard}
                title={card.title}
                text={card.text}
                category={card.category}
              />
            </Flex>
          );
        })}
      </SimpleGrid>
    );
  }
}

export default CardList;
