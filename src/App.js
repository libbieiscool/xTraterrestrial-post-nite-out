import logo from './logo.svg';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Welcome from './pages/Welcome/Welcome';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
      <main className='app__pageContainer'>
        <Welcome/>

      </main>
       
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
