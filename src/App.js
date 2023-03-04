import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { GetAPI } from './pages/GetAPI';
import { ToDoApp } from './pages/ToDoApp';
import { Navigation } from './Navigation';
import { useState, createContext } from 'react';

// Context
export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("LE QUOC DUY");

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navigation />
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/getapi" element={<GetAPI />} />
            <Route path="/todo" element={<ToDoApp />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
