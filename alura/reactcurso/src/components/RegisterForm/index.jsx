import React, { Component } from 'react';
import {
  FormControl,
  Input,
  Textarea,
  Button,
  Flex,
  Select,
} from '@chakra-ui/react';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.title = '';
    this.text = '';
    this.category = 'Sem categoria.';
  }
  _handleTitleChange(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleTextChange(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _handleCategoryChange(event) {
    event.stopPropagation();
    this.category = event.target.value;
  }

  _createCard(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createCard(this.title, this.text, this.category);
  }

  render() {
    return (
      <>
        <form onSubmit={this._createCard.bind(this)}>
          <FormControl
            width='400px'
            borderRight='2px'
            borderRightColor='slateblue'
            minHeight='100vh'
            padding='20px'
          >
            <Flex flexDirection='column' mt='20px' alignItems='flex-end'>
              <select onChange={this._handleCategoryChange.bind(this)}>
                <option>Sem categoria</option>
                {this.props.categories.map((category) => {
                  return <option>{category}</option>;
                })}
              </select>
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
              <button bg='slateblue' color='white'>
                Criar Nota
              </button>
            </Flex>
          </FormControl>
        </form>
      </>
    );
  }
}

export default RegisterForm;
