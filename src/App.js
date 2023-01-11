import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './comps/Home';
import Games from './comps/Games';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />}/>
        <Route path="games" element={< Games />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
