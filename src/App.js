import './App.css';
import {Header} from "./MyComponents/Header"
import {Characterization} from "./MyComponents/Characterization"
import { useState, useEffect } from 'react';
import { Showme } from './MyComponents/Showme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useParams
} from "react-router-dom";

function App() {
  const [characters, setCharac] = useState([]);

  // + adding the use
  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch("https://www.breakingbadapi.com/api/characters");
      //console.log(response);
      const data = await response.json();
      console.log(data);
      setCharac(data) ;
    }
  }, []);

  let {id} = useParams();
  console.log(useParams());

  return (
    <div>
      <Router>
      <Header/>
      <Switch>
          <Route exact path="/:id">
            <Showme chara={characters} chari= {id} />
          </Route>
          <Route exact path="/">
            {characters && (
              <div className="characters">

                {characters.map((charac, index) => (
                  <div className="d-flex" key={index}>
                    <img src={charac.img} alt="" />
                    <Characterization chararr={characters}  charid={charac.char_id}/>
                  </div>
                ))}

              </div>
            )}
          </Route>
        </Switch>
      </Router>

    {/* <div className="front d-flex">
            <img src="./Images/Walter_White" alt="" />
            <img src="./Images/Walter_White" alt="" />
            <img src="./Images/Walter_White" alt="" />
            <img src="./Images/Walter_White" alt="" />
            <img src="./Images/Walter_White" alt="" />
            <img src="./Images/Walter_White" alt="" />
        </div> */}
  </div>
  )
}

export default App;
