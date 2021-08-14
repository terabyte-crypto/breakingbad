import './App.css';
import {Header} from "./MyComponents/Header"
import {Characterization} from "./MyComponents/Characterization"
import { useState, useEffect } from 'react';

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

  return (
    <div>
    <Header/>

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
