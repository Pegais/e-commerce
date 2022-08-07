import { useState ,useEffect} from 'react'
import axios from 'axios'
function Signup() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    console.log(email);
    console.log(password);
    async function handleClick() {
        let response = await axios.post('http://localhost:5001/test/user', { email, password })
        console.log(response.data);
       }
  return (
      <div>
          <div className="App">
      <div>enter your email</div>
      <input type="text" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)}/>
      <div>enter your password</div>
      <input type="text" placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)} /><br />
      <button onClick={handleClick}>Signup</button>
    </div>
    </div>
  )
}

export default Signup