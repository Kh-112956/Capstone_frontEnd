import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   /*  const authContext = useContext(AuthContext) */
    function login(e) {
        let employee = {
            email: email,
            password: password, 
        }
        e.preventDefault();
        console.log({ email, password });
        //Send Api request to validate data and get token
        axios({
            method: "get",
            url: 'https://beautysalonplus.herokuapp.com/api/customer/login',
            params: { email: email , password: password}
        }).then((response)=> {alert(response.data)
            if(response.data=="Customer authenticated"){
                localStorage.setItem('email', email);
                navigate("/homepage");
            }
        });  
    }
    return ( 
    <>

     <div className='pen-title'>
   <h1>Welcome</h1>
   </div>
    
    <div className="import1">
    
           
            <div className="container">
                
                
                    <h1 className="title">Login</h1>
                    <form>
                        <div className="input-container">
                            <label for="#{label}">Email: </label>
                            <input type="email" id="#{label}" required="required" onChange={ e=>setEmail(e.target.value)}/>
                            
                            <div class="bar"></div>
                        </div>
                        <div className="input-container">
                            <label for="#{label}">Password:</label>
                            <input type="password" id="#{label}" required="required" onChange={e => setPassword(e.target.value)}/>
                            
                            <div className="bar"></div>
                        </div>
                        <div className="button-container">
                            <button class="f" onClick={login}><span>Go</span></button>
                        </div>
                        <div className="footer"><a href="#">Forgot your password?</a></div>
                    </form>
                
              
            </div>
        
        </div>
        </>
    )
}