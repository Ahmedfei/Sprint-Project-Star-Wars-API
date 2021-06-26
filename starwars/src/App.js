import React, {useState, useEffect} from 'react';
import NavBar from "./components/NavBar"
import People from "./components/Poeple";
import Films from './components/Films';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {

  const [people, setPeople] = useState([]);
  
  const [films, setFilms] = useState([]);


  useEffect(() => {

async function fetchPeople() {
let res = await fetch ("https://swapi.dev/api/people/" );
let data = await res.json();
setPeople(data.results);


  }

  async function fetchFilms() {
    let res = await fetch ("https://swapi.dev/api/films/" );
    let data = await res.json();
    setFilms(data.results);



  }



  fetchPeople();
  fetchFilms();
  
  }, []);

  console.log("data", people);
  console.log("data", films);
  

  return (
    <>
      <Router>
      <NavBar />
<Switch>

<Route exact path="/">
      <Home />
      </Route>
      
  
      <Route exact path="/people">
      <People  people={people}/>
      </Route>

      <Route exact path="/planets">
      < Films  films={films} />
      </Route>


</Switch>
      </Router>
      </>
    
  );
}

export default App;
