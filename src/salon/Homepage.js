
import React,{useEffect,useState} from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

// import { Form, Button } from 'react-bootstrap'
import { AuthContext } from './AuthContext';

 import './homepage.css'
export default function Homepage() {
    const navigate = useNavigate();
    const [allServices, setAllServices] = useState({ id: "", sname: "",price:"" })

    useEffect(() => {
        window.history.replaceState(null, '', '');
      }, []);
    useEffect(() => {
        axios.get("https://beautysalonplus.herokuapp.com/api/service")
        .then(response => {
            setAllServices(response.data)
           
        }) 
       
    },[] )
    function handleDelete(event,del){
        event.preventDefault() ; 
        console.log("del",del)
         axios({
           method:'delete',
           url:`https://beautysalonplus.herokuapp.com//api/service/delete/${del}`,
         });} 
        function gotoservice (event,id){
            event.preventDefault();
            navigate(`../oneservice/${id}`);
            console.log(id)
        }
    
    return (

        <div>
                <h1>Welcome To Salon</h1>
            
            <h2>Our Services</h2>
        
              <>
                <div className='flexer' >
                    {allServices.length ? allServices.map(item => (
                        <div className='card' key={item.id}>
                            <div className='contianer'>
                                <img className='img' src={item.photo} />
                                <h4 >{item.sname}</h4>
                                <hr className='line' />
                                <p>{item.price}</p>
                                <p>{item.materials}</p>
                                <button class="c"onClick={(event) => gotoservice(event,item.id)}>Show</button>
                                <button class="c"onClick={(event) => handleDelete(event,item.id)}>Delete</button>
                                <div class="tooltip">
                                </div>
                                <br></br>

                            </div>
                        </div>
                    )): <h4>null</h4>}
                </div>
            </>
        </div>
    )
}