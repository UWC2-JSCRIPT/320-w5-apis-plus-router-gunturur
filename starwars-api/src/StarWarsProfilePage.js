import {useParams} from 'react-router-dom';
import StarWars from './StarWars';

function StarWarsProfilePage() {
  const {charno} = useParams();

  return (
    <div>
      <h1>Starwars Character Profile</h1>
      <StarWars charno={charno}/>
    </div>
  )
}

export default StarWarsProfilePage;
