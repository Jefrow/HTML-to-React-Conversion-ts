import { Component } from 'react';
import { CharacterCard } from '../cards/CharacterCard';
import { Character } from '../../types';
import './CharacterCards.css';

type PropTypes = {
  characters: Character[];
};

export class CharacterCards extends Component<PropTypes> {
  render() {
    const { characters } = this.props;

    return (
      <section id="character-cards">
        {characters.map((character) => (
          <CharacterCard character={character} />
        ))}
      </section>
    );
  }
}
