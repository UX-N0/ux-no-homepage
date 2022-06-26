import './App.css'
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Info from './components/pages/Info';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <>
  <Router >
    <NavBar />
    <Routes >
      <Route path='/' exact element={<Home />} />
      <Route path='/about' exact element={<About/>} />
      <Route path='/info' exact element={<Info/>} />
      <Route path='/sign-up' exact element={<SignUp/>} />
    </Routes>
    <Footer />
  </Router>
  </>
  );
}

export default App;
