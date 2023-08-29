import './App.css';
import albania from "./images/albania.png";
import bosnia from "./images/bosnia.png";
import Post from './components/post/Post.js';
import Navigation from './components/navigation/Navigation';
import NewPost from './components/new-post/NewPost';
import { useState } from 'react';

function App() {

  const [newPostData, setNewPostData] = useState('');

  const handleNewPost = (data) => {
    console.log("New post data from app.js = " + data);
    setNewPostData(data);
  }

  return (
    <div className="App">
      <Navigation></Navigation>
      <Post title="Albania" image={albania}></Post>
      <Post title="Bosnia" image={bosnia}></Post>
      { newPostData == '' ? (
        <p>Empty post</p>
      ) : (
        <Post title={newPostData}></Post>
      )
      }
      <NewPost onNewPostData={handleNewPost}></NewPost>
    </div>
  );
}

export default App;
