import React, { Component } from 'react';
import { Text, Flex, Input } from '@chakra-ui/react';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = { categories: [] };
  }

  componentDidMount() {
    this.props.categories.subscribe(this._newCategory.bind(this));
  }

  _newCategory(categories) {
    this.setState({ ...this.state, categories });
  }

  _handleEventInput(e) {
    if (e.key == 'Enter') {
      let valueCategory = e.target.value;
      this.props.addCategory(valueCategory);
    }
  }

  render() {
    return (
      <Flex>
        <Flex>
          {this.state.categories.map((category, index) => {
            return <Text key={index}>{category}</Text>;
          })}
        </Flex>
        <Input
          placeholder='Adicionar Categoria'
          onKeyUp={this._handleEventInput.bind(this)}
        />
      </Flex>
    );
  }
}

export default CategoryList;
