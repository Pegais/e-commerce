import React, { useEffect,useState} from 'react'
import axios from 'axios'

export default function () {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    console.log(email,password);
    
    const handleClick =async () => {
        let res = await axios.post('http://localhost:5000/test/user', { email, password })
        console.log(res.data);
    }
  return (
      <div>
          <input type="email" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)} /><br />
          <input type="password" placeholder='enter you passsword' onChange={(e)=>setPassword(e.target.value)} />
          <button onClick={handleClick}>Login</button>

    </div>
  )
}
