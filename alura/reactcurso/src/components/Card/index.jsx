import React, { Component } from 'react';
import { ReactComponent as DeleteCardIcon } from '../../assets/img/delete.svg';
import { Flex, Text } from '@chakra-ui/react';

class Card extends Component {
  delete() {
    const indice = this.props.indice;
    this.props.deleteCard(indice);
  }
  render() {
    return (
      <Flex
        flexDirection='column'
        alignItems='flex-start'
        justifyContent='space-between'
        borderRadius='4px'
        flexWrap='wrap'
        boxShadow='0 0 4px rgba(0,0,0, 0.3)'
        padding='16px'
        bg='snow'
      >
        {/* Tag JS representada por {} dentro do JSX */}
        {}

        <Flex
          fontSize='1.1em'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          width='100%'
        >
          <Text mt='8px' fontSize='1em'>
            {this.props.title}
          </Text>
          <DeleteCardIcon onClick={this.delete.bind(this)} />
        </Flex>
        <Text fontSize='1.2em' mr='12px'>
          {this.props.text}
        </Text>
      </Flex>
    );
  }
}

export default Card;
