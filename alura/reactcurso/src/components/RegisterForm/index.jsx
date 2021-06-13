import React, { Component } from 'react';
import { FormControl, Input, Textarea, Button, Flex } from '@chakra-ui/react';

class RegisterForm extends Component {
  constructor() {
    super();
    this.titulo = '';
  }
  handleTitleChange(event) {
    this.titulo = event.target.value;
  }

  render() {
    return (
      <>
        <FormControl
          width='400px'
          borderRight='2px'
          borderRightColor='slateblue'
          minHeight='100vh'
          padding='20px'
        >
          <Flex flexDirection='column' mt='20px' alignItems='flex-end'>
            <Input
              type='text'
              placeholder='Titulo'
              mb='20px'
              bg='snow'
              onChange={this.handleTitleChange}
            />
            <Textarea
              placeholder='Escreva sua nota...'
              mb='20px'
              size='lg'
              height='300px'
              bg='snow'
            />
            <Button bg='slateblue' color='white'>
              Criar Nota
            </Button>
          </Flex>
        </FormControl>
      </>
    );
  }
}

export default RegisterForm;
