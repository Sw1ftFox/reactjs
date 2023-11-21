import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import './styles/App.css'
import PostItem from './components/PostItem';

function App() {
  const [value, setValue] = useState('ТЕКСТ В ИНПУТЕ');
  
 

  return (
    <div className="App">
      <PostItem></PostItem>
      <PostItem></PostItem>
      <PostItem></PostItem>
      <PostItem></PostItem>
      <PostItem></PostItem>
    </div>
  );
}

export default App;
