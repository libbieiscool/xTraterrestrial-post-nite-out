import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Welcome from './pages/Welcome/Welcome';
import About from './pages/About/About';
import HowTo from './pages/HowTo/HowTo';
import Gameplay from './pages/Gameplay/Gameplay';
import GameOver from './pages/GameOver/GameOver';
import GamePage1 from './pages/GamePages/GamePage1/GamePage1';
import GamePage2 from './pages/GamePages/GamePage2/GamePage2';
import GamePage3 from './pages/GamePages/GamePage3/GamePage3';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/about" element={<About/>}/> 
          <Route path="/howtoplay" element={<HowTo/>}/>
          <Route path="/gameplay" element={<Gameplay/>} /> 
          <Route path="/gameover" element={<GameOver/> } />
          <Route path="/page1" element={<GamePage1/>}/> 
          <Route path="/page2" element={<GamePage2/>}/>
          <Route path="/page3" element={<GamePage3/>}/> 
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
