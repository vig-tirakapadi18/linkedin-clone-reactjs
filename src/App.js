import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { useEffect } from 'react';
import { getUserAuth } from './actions';
import { connect } from "react-redux";

const App = (props) => {
  useEffect(() => {
    props.getUserAuth();
  }, [props])

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<><Header /> <Home /></>} />
    </Routes>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
