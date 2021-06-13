import React, { Component } from 'react';
import { SimpleGrid, Text, Flex } from '@chakra-ui/react';
import Card from '../Card';

class ListaDeNotas extends Component {
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
        {Array.of('Trabalho', 'Trabalho', 'Estudos', 'Emprego', 'Salario').map(
          (categoria, index) => {
            return (
              <Flex margin='12px' key={index} flexDirection='column'>
                <Text>{categoria}</Text>
                <Card />
              </Flex>
            );
          }
        )}
      </SimpleGrid>
    );
  }
}

export default ListaDeNotas;
