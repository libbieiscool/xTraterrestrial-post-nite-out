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
import GamePage7b from './pages/GamePages/GamePage7/GamePage7b';
import GamePage6c from './pages/GamePages/GamePage6b/GamePage6c';
import GamePage7a from './pages/GamePages/GamePage7/GamePage7a';
import GamePage8a from './pages/GamePages/GamePage8a/GamePage8a';
import GamePage8b from './pages/GamePages/GamePage8b/GamePage8b';
import GamePage9a from './pages/GamePages/GamePage9a/GamePage9a';
import GamePage10 from './pages/GamePages/GamePage10/GamePage10';
import GamePage11 from './pages/GamePages/GamePage11/GamePage11';
import GamePage11b from './pages/GamePages/GamePage11/GamePage11b';
import GamePage12 from './pages/GamePages/GamePage12/GamePage12';
import GamePage13 from './pages/GamePages/GamePage13/GamePage13';
import GamePage14 from './pages/GamePages/GamePage14/GamePage14';
import GamePage15 from './pages/GamePages/GamePage15/GamePage15';
import GamePage16 from './pages/GamePages/GamePage16/GamePage16';
import GamePage17 from './pages/GamePages/GamePage17/GamePage17';

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
          <Route path="/page6c" element={<GamePage6c/>}/>
          <Route path="/page7a" element={<GamePage7a cash={currentCash} updateCash={cashChange}/>}/>
          <Route path="/page7b" element={<GamePage7b cash={currentCash} updateCash={cashChange}/>}/>
          <Route path="/page8a" element={<GamePage8a/>}/>
          <Route path="/page8b" element={<GamePage8b/>} />
          <Route path="/page9a" element={<GamePage9a/>}/>
          <Route path="/page10" element={<GamePage10/>} />
          <Route path="/page11" element={<GamePage11/>} /> 
          <Route path="/page11b" element={<GamePage11b/>} />
          <Route path="/page12" element={<GamePage12/>}/>
          <Route path="/page13" element={<GamePage13/>} />
          <Route path="/page14" element={<GamePage14/>} />
          <Route path="/page15" element={<GamePage15/>} />
          <Route path="/page16" element={<GamePage16/>} />
          <Route path="/page17" element={<GamePage17/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
