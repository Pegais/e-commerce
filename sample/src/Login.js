import { useState ,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

function Login({ setRes }) {
    let navigate = useNavigate();
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    

    console.log(email);
    console.log(password);
    async function handleClick() {
        console.log("working");
       try {
        let response = await axios.post('http://localhost:5001/test/userAuth', { email, password })
           console.log(response.data.message);
        //    setRes(response.data.message);
        //    console.log(res,"test1");
         if (response.data.message =='success') { 
            //    console.log("userAuth successful",res);
            setRes(response.data.testData);
               navigate("/")
            
         } else {
             
             navigate("/signup")
           }
         

       } catch (error) {
        console.log(error)
        }
        // console.log(res,"test2")
        
       }
  return (
      <div>
          <div className="App">
      <div>enter your email</div>
              <input type="text" placeholder="enter your email" onChange={(e) => setEmail(e.target.value)} value={ email} />
      <div>enter your password</div>
              <input type="text" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)} value={password} /><br />
      <button onClick={handleClick}>Login</button>
    </div>
    </div>
  )
}

export default Login