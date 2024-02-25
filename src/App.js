import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
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
import GamePage3a from './pages/GamePages/GamePage3/GamePage3a';
import GamePage4 from './pages/GamePages/GamePage4/GamePage4';
import GamePage5a from './pages/GamePages/GamePage5a/GamePage5a';
import GamePage5b from './pages/GamePages/GamePage5b/GamePage5b';
import GamePage6a from './pages/GamePages/GamePage6a/GamePage6a';
import GamePage6b from './pages/GamePages/GamePage6b/GamePage6b';

function App() {
  const [currentCash, setCurrentCash] = useState(20)

  function cashChange(data){
    setCurrentCash(data)
  }

  return (
    <div className="app">
      <BrowserRouter>
      <Header cash={currentCash}/>
      <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/about" element={<About/>}/> 
          <Route path="/howtoplay" element={<HowTo/>}/>
          <Route path="/gameplay" element={<Gameplay/>} /> 
          <Route path="/gameover" element={<GameOver/> } />
          <Route path="/page1" element={<GamePage1/>}/> 
          <Route path="/page2" element={<GamePage2 cash={currentCash} updateCash={cashChange}/>}/>
          <Route path="/page3" element={<GamePage3 cash={currentCash}/>}/> 
          <Route path="/page3a" element={<GamePage3a cash={currentCash} updateCash={cashChange}/>} />
          <Route path="/page4" element={<GamePage4/>} />
          <Route path="/page5a" element={<GamePage5a/>} /> 
          <Route path="/page5b" element={<GamePage5b/>}/>
          <Route path="/page6a" element={<GamePage6a cash={currentCash} updateCash={cashChange}/> }/>
          <Route path="/page6b" element={<GamePage6b/>} /> 



      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
