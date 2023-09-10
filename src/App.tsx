import './App.css'
import { data } from '../public/fma-data'; 
import { Header } from './components/header/Header';
import { CharacterRatings } from './components/character_ratings/ChracterRatings';
import CharacterCards from './components/character_cards/CharacterCards';

function App() {

  return (
    <>
      <Header />
      <CharacterRatings characters={data}/>
      <CharacterCards characters={data} />
    </>
  )
}

export default App
