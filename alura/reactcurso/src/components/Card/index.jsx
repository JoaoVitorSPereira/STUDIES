import React, { Component } from 'react';
import './styles.css';

class Card extends Component {
  render() {
    return (
      <section className='card-style'>
        {/* Tag JS representada por {} dentro do JSX */}
        {}

        <header className='card-style_header'>
          <h3 className='card-style_title'>Titulo</h3>
        </header>
        <p className='card-style_text'>Escreva sua nota</p>
      </section>
    );
  }
}

export default Card;
