import PostList from "./components/post-lists"
import "./App.css";
import {useState} from "react";

function App() {
   
  const [toggle, setToggle] = useState(true);
  return (
     
  
      <div>
        <h2 className="title">My Posts</h2>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle && <PostList />}
      </div>
     
  );
}

export default App
