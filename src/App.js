import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar';
import Booking from './Components/Booking/Booking';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="booking" element={<Booking/>} />
        {/* <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
