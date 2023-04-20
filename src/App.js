import './App.css';
import { BrowserRouter,Routes,Route, useLocation } from 'react-router-dom';
import Home from './comps/Home';
import Games from './comps/Games';
import AnimatedRoutes from './comps/AnimatedRoutes';


function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
