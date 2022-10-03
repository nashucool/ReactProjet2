
import './App.css';
import NavBar from './components/NavBar';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Product from './components/pages/Product';
import SignUp from './components/pages/SignUp';

function App() {
  return (
  <>
  <Router>
    <NavBar/>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/services' exact element={<Services/>}/>
      <Route path='/products' exact element={<Product/>}/>
      <Route path='/sign-up' exact element={<SignUp/>}/>
    </Routes>
  </Router>
    
  </>
     
  );
}

export default App;
