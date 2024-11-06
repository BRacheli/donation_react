import logo from './logo.svg';
import './App.css';
import ThanksPage from './components/ThanksPage';
import DonationForm from './components/DonationForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DonationCenters from './components/DonationCenters';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/donatForm' element={<DonationForm/>}/>
        <Route path='/thanks/:name' element={<ThanksPage/>}/>
        <Route path='/donCenters' element={<DonationCenters/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
