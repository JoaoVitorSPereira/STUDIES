import React, { Component } from 'react';
import { FormControl, Input, Textarea, Button, Flex } from '@chakra-ui/react';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.title = '';
    this.text = '';
  }
  _handleTitleChange(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleTextChange(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _createCard(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createCard(this.title, this.text);
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
          onSubmit={this._createCard.bind(this)}
        >
          <Flex flexDirection='column' mt='20px' alignItems='flex-end'>
            <Input
              type='text'
              placeholder='Titulo'
              mb='20px'
              bg='snow'
              onChange={this._handleTitleChange.bind(this)}
            />
            <Textarea
              placeholder='Escreva sua nota...'
              mb='20px'
              size='lg'
              height='300px'
              bg='snow'
              onChange={this._handleTextChange.bind(this)}
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
