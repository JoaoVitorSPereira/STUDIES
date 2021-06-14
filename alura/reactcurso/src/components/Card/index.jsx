import React, { Component } from 'react';
import { Flex, Text } from '@chakra-ui/react';

class Card extends Component {
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
        >
          <Text mt='8px' fontSize='1em'>
            {this.props.title}
          </Text>
        </Flex>
        <Text fontSize='1.2em' mr='12px'>
          {this.props.text}
        </Text>
      </Flex>
    );
  }
}

export default Card;
