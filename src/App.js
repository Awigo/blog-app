import './App.css';
import albania from "./images/albania.png";
import bosnia from "./images/bosnia.png";
import Post from './components/post/Post.js';
import Navigation from './components/navigation/Navigation';
import NewPost from './components/new-post/NewPost';
import { useState } from 'react';

function App() {

  const [countries, setCountries] = useState([{
    name: "Albania",
    image: albania
  },
  {
    name: "Bosnia",
    image: bosnia
  }]);

  const handleNewCountry = (newCountry) => {
    console.log("New country from app.js = " + newCountry);
    console.log("Nec country img = " + newCountry.image);
    setCountries(previousCountries => [...previousCountries, newCountry]);
  }

  return (
    <div className="App">
      <Navigation></Navigation>
      {countries.map(country => (
        <Post title={country.name} image={country.image}></Post>
      ))}
      <NewPost onNewPostData={handleNewCountry}></NewPost>
    </div>
  );
}

export default App;
