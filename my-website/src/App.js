import './App.scss';
import { Router, Route, Routes, Navigate } from 'react-router'
import Dashboard from './components/dashboard/Dashboard.js';
import About from './components/about/About';


function App() {
  return (
    // <Routes>
    //   <Route path="/" exact element={<Navigate to="/dashboard" />} />
    //   <Route path="/dashboard" element={<Dashboard />} />
    //   <Route path="/about" element={<About />} />
    // </Routes>
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
