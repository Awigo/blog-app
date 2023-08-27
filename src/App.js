import './App.css';
import albania from "./images/albania.png";
import bosnia from "./images/bosnia.png";
import Post from './components/post/Post.js';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Post title="Albania" image={albania}></Post>
      <Post title="Bosnia" image={bosnia}></Post>
    </div>
  );
}

export default App;
