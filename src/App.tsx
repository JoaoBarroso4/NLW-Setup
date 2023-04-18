import { useState } from 'react'
import './App.css'
import Habit from "./components/Habit";

function App() {
  return (
      <>
          <div>Hello, World!</div>
          <Habit completed={4}/>
          <Habit completed={4}/>
          <Habit completed={4}/>
          <Habit completed={4}/>
      </>
  );
}

export default App;
