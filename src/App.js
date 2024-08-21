import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Keyboards from './components/Keyboards/Keyboards';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Keyboards/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
