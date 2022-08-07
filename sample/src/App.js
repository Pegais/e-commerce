import logo from './logo.svg';
import './App.css';
import { useState ,useEffect} from 'react'
import Login from './Login';
import Signup from './Signup';
import Content from "./Content"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let [res, setRes] = useState('')
  console.log(res);
  //  axios.get()
  // hook useEffect=> this hook helps you to do sideeffects on your page
  // useeffect => effect , return part (clean up function) ,dependency array
  
return (
    <Router>
    <Routes>
      <Route element={<Login setRes={ setRes} />} path="/login" />
      <Route element={<Signup/>} path="/signup" />
      <Route element={<Content res={ res} />} path="/" />
    </Routes>
  </Router>
  );
}

export default App;
