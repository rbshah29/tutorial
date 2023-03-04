import './App.css';
import LoginPage from './components/LoginPage';
import Profiles from './components/Profiles';
import ProfileDetails from './components/ProfileDetails';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/profiles" element={<Profiles/>} />
      <Route path="/profiledetails" element={<ProfileDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
