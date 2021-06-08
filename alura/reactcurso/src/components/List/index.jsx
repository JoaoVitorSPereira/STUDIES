import React, { Component } from 'react';
import Card from '../Card';

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of('Trabalho', 'Trabalho', 'Estudos').map((categoria, index) => {
          return (
            <li key={index}>
              <h1>{categoria}</h1>
              <Card />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
