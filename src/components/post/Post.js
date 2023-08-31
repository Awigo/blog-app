import { useState } from "react";
import  "./Post.css";

const Post = (props) => {
    const[counter, setCounter] = useState(0);

    const addOneView = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

    return (
        <div className="card">
            <img src={props.image} className="image" alt="img"></img>
            <h2>{props.title}</h2>
            <h2>Views: {counter}</h2>
            <button className="button" onClick={addOneView}>Add one view</button>
        </div>
    );
}

export default Post;