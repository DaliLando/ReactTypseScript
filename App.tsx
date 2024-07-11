import React from 'react';
import './App.css';
import Greeting from './components/greeting';
import Counter from './components/counter';

function App() {

  let data: string[] = ["Hola","Hey","Salut"];

  let title ="Kenobi"
  return (
    <div className="App">
      <Greeting name={title}/>
      <Counter data={data}/>
    </div>
  );
}

export default App;
