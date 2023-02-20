import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarWars from "./StarWars";
import {Link, Route, Routes, useParams, useLocation} from 'react-router-dom';

export default function StarWarsList() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [loading, toggleLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchCharacters = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setCharacters(prevCharacters => [...prevCharacters, ...data.results]);

        if (data.next) {
          fetchCharacters(data.next);
        } else {
          toggleLoading(false);
        }
      } catch (error) {
        console.log(error);
        toggleLoading(false);
        setHasError(true);
      }
    };

    fetchCharacters('https://swapi.dev/api/people/');
  }, []);


  const handleClick = (charno) => {
    // navigate(`/starwars/${charno}`
    navigate(`/star-char/${charno}`);
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (hasError) {
    return <p>Sorry, something went wrong.</p>
  }

  return (
    <>
      <div>
        <h2>Star Wars Characters</h2>

        {characters.map((character, index) => (
          <ListGroup>
            <ListGroup.Item variant="primary" key={character.name}>

              <Button variant="primary" onClick={() => handleClick(index + 1)} key={character.name}>
                {character.name}
              </Button>{''}
            </ListGroup.Item>
          </ListGroup>
        ))}

      </div>
    </>
  );
}


