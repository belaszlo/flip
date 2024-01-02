import './App.scss';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Play from './components/Play';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="play" element={<Play />} />
      </Routes>
    </>
  );
}

export default App;
