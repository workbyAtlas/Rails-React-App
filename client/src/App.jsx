import { useState } from 'react'

import './App.css'
import PostsList from "./features/posts/PostsList";

function App() {
  return (
  <>
    <div className="app">
      <h2>React App</h2>
      <p>Find this Application</p>
      <PostsList />
    </div>
  </>
  );


}

export default App
