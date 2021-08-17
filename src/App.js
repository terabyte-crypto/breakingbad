import './App.css';
import {Header} from "./MyComponents/Header"
import {Characterization} from "./MyComponents/Characterization"
import { useState, useEffect } from 'react';
import { Showme } from './MyComponents/Showme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [characters, setCharac] = useState([]);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch("https://www.breakingbadapi.com/api/characters");
      const response1 = await fetch("https://www.breakingbadapi.com/api/quotes");
      const data = await response.json();
      const data1 = await response1.json();
      setCharac(data) ;
      setQuotes(data1) ;
    }
  }, []);

  

  return (
    <div>
      <Router>
      <Header/>
      <Switch>
          <Route exact path="/:id" component={() => <Showme chara={characters} quota={quotes} />}/>
            
          <div>
          <Route exact path="/">
            {characters && (
              <div className="button">

                {characters.map((charac, index) => (
                  <div className="characters" key={index}>

                    <img className="Borde" src={charac.img} alt="" />
                    <Characterization chararr={characters}  charid={charac.char_id}/>
                  </div>
                ))}

              </div>
            )}
          </Route>
          </div>
        </Switch>
      </Router>
  </div>
  )
}

export default App;
