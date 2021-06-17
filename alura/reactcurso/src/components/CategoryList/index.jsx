import React, { Component } from 'react';
import { Text, Flex, Input } from '@chakra-ui/react';

class CategoryList extends Component {
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
          {this.props.categories.map((category, index) => {
            return <Text key={index}>{category}</Text>;
          })}
        </Flex>
        <Input
          placeholder='Adicionar Categoria'
          onKeyUp={this._handleEventInput}
        />
      </Flex>
    );
  }
}

export default CategoryList;
