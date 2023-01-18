import './App.css';
import About from './components/About'
import { Routes, Route } from 'react-router-dom';
import TheNavBar from './components/TheNavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import Frank from './components/Frank';



function App() {
  return (
  <div>
      <TheNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Test" element={<About />} />
        <Route path="/Our-Team" element={<About />} />
        <Route path="/Blog" element={<About />} />
        <Route path="/Contact" element={<About />} />
        <Route path="/Frank" element={<Frank />} />
      </Routes>
      <Footer />
  </div>
  );
}

export default App;
