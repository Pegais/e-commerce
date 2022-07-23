import logo from './logo.svg';
import './App.css';
import { useState ,useEffect} from 'react'
import axios from 'axios'

function App() {
  //  axios.get()
  // hook useEffect=> this hook helps you to do sideeffects on your page
  // useeffect => effect , return part (clean up function) ,dependency array
  useEffect(() => {
    async function res() {
      let response =await axios.get('http://localhost:5000/')
      console.log(response.data)
    }
    res()
  }, []);


  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  console.log(email);
  console.log(password);


 async function handleClick() {
   let response = await axios.post('http://localhost:5000/test/user', { email, password })
   console.log(response.data);
  }
  return (
    <div className="App">
      <div>enter your email</div>
      <input type="text" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)}/>
      <div>enter your password</div>
      <input type="text" placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)} /><br />
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default App;
