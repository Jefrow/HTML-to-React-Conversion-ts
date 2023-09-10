import './CharacterRatings.css';
import { Character } from '../../types';

type characterProps = {
  characters: Character[];
};

export const CharacterRatings = ({ characters }: characterProps) => {
  const tableHeadings = ['Name', 'Skillset', 'Votes'];

  const tempCharacterArray = [...characters];
  const topFiveChar = tempCharacterArray
    .sort((charA, charB) => charB.votes - charA.votes)
    .slice(0, 5);

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          {tableHeadings.map((heading) => (
            <th key={heading}>{heading}</th>
          ))}
        </thead>
        <tbody>
          {topFiveChar.map((character, index) => (
            <tr
              key={character.name}
              className={index % 2 === 0 ? 'dark' : 'light'}
            >
              <td>{character.name}</td>
              <td>{character.skillset}</td>
              <td>{character.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
