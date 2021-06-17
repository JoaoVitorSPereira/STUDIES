import React, { Component } from 'react';
import { SimpleGrid, Flex } from '@chakra-ui/react';
import Card from '../Card';

class CardList extends Component {
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
        {this.props.cards.map((card, index) => {
          return (
            <Flex margin='12px' key={index} flexDirection='column'>
              <Card
                indice={index}
                deleteCard={this.props.deleteCard}
                title={card.title}
                text={card.text}
              />
            </Flex>
          );
        })}
      </SimpleGrid>
    );
  }
}

export default CardList;
