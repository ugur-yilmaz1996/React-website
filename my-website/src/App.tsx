import './App.scss';
import { Router, Route, Routes, Navigate } from 'react-router'
import Dashboard from './components/dashboard/Dashboard.js';
import About from './components/about/About';


function App() {
  return (
    <div>
      <header>
        My Website
      </header>
      <Dashboard />
      <input placeholder="Search ..." />
      <button>Style</button>
    </div>
  );
}

export default App;
