import React from 'react';
import './App.css';
import Home from './screens/home/home';
import MealContextApiProvider from './context/mealcontext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h2>Random Meal Generator</h2>
      </header>
      <MealContextApiProvider>
      <Home/>
      </MealContextApiProvider>
    </div>
  );
}

export default App;
