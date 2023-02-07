import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
