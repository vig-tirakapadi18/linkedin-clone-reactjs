import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<><Header /> <Home /></>} />
    </Routes>
  );
}

export default App;
