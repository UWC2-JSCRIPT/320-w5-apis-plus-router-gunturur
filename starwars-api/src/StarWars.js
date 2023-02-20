import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function StarWars({charno}) {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(undefined);
  const [loading, toggleLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${charno}`)
      .then(response => response.json())
      .then(
        (data) => {
          setProfile(data);
          toggleLoading(false);
          //navigate('/about')
        },
        (error) => {
          console.log(error)
          toggleLoading(false);
          setHasError(true);
        })

  }, [])

  if (loading) {
    return <p>loading...</p>
  }

  if (hasError) {
    return <p>Error!</p>
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh'}}>
      <Card style={{width: '18rem'}}>
        <Card.Header>StarWars Character</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Name: {profile.name}</ListGroup.Item>
          <ListGroup.Item>Height: {profile.height}</ListGroup.Item>
          <ListGroup.Item>Height: {profile.hair_color}</ListGroup.Item>
          <ListGroup.Item>Height: {profile.skin_color}</ListGroup.Item>
          <ListGroup.Item>Height: {profile.gender}</ListGroup.Item>
        </ListGroup>
        <Link to="/"><Button variant="primary">Go to Home</Button></Link>
      </Card>

    </div>
  )

}

StarWars.prototype = {
  charno: PropTypes.number.isRequired
}
