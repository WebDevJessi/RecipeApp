import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const APP_ID = "afc0129f";
  const APP_KEY ="7348610b60ffea5f97c291e9ab3a6e13";

  const [counter, setCounter] = useState(0);

  useEffect(() =>{

  }, []);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json();
  console.log(data);
}

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
          </button>
      </form>
    </div>
  );
};

export default App;