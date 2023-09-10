import { Character } from '../../types';
import './Cards.css';

type CharacterProps = {
  character: Character;
};

export const Card = ({
  character: { name, nickName, imageUrl, background },
}: CharacterProps) => {
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{name}</h3>
        <h4>{nickName}</h4>
      </div>
      <img src={imageUrl} alt={`${name} image`} />
      <p>{background}</p>
    </div>
  );
};
