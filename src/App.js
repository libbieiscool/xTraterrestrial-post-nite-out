import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Welcome from './pages/Welcome/Welcome';
import About from './pages/About/About';
import HowTo from './pages/HowTo/HowTo';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/about" element={<About/>}/> 
          <Route path="/howtoplay" element={<HowTo/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
