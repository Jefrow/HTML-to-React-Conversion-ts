import { Component } from 'react';
import { Card } from '../cards/Cards';
import { Character } from '../../types';
import './CharacterCards.css';

type PropTypes = {
  characters: Character[];
};

class CharacterCards extends Component<PropTypes> {
  render() {
    const { characters } = this.props;

    return (
      <section id="character-cards">
        {characters.map((character) => (
          <Card character={character} />
        ))}
      </section>
    );
  }
}

export default CharacterCards;
