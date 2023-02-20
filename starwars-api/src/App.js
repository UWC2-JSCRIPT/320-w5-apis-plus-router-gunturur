import './App.css';
import StarWars from './StarWars';
import React, {useState} from 'react';
import {Link, Route, Routes, useParams, useLocation} from 'react-router-dom';
import StarWarsList from "./StarWarsList";
import StarWarsProfilePage from "./StarWarsProfilePage";

const Home = () => {
  const {search} = useLocation();
  console.log(search);

  return (<div>
    <h1>Home</h1>
    <Link to="star-wars">Starwars Characters</Link>
  </div>)
};


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/*<Route path="about" element={<About/>} />*/}
        <Route path="star-char/:charno" element={<StarWarsProfilePage/>}/>
        <Route path="star-wars" element={<StarWarsList/>}/>
      </Routes>

    </div>
  );
}

export default App;
