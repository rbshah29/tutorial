import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import { useState } from 'react';
import Profile from './components/Profile';

function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    
    <div className="App">
      {/* 
      <Navbar />
      <Body /> */}

      <Header />
      {!isSubmit ? 
        (<Registration isSubmit={isSubmit} setIsSubmit={setIsSubmit}/>) :
        (<Profile />)
      } 
    </div>
  );
}

export default App;
