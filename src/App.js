import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import Form from './pages/Form';
import { Contact } from './pages/Contact';
import { GetAPI } from './pages/GetAPI';
import { ToDoApp } from './pages/ToDoApp';
import { Navigation } from './Navigation';
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Context
export const AppContext = createContext();

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      }
    }
  });

  const [username, setUsername] = useState("LE QUOC DUY");

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <QueryClientProvider client={client}>
          <Router>
            <Navigation />
            <br />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/form" element={<Form />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/getapi" element={<GetAPI />} />
              <Route path="/todo" element={<ToDoApp />} />
              <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
