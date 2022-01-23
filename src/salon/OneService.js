
import React,{useEffect,useState} from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

// import { Form, Button } from 'react-bootstrap'
import { AuthContext } from './AuthContext';
import { useParams } from "react-router-dom";

// import './styleForm.css'
export default function Oneservice() {
    const [sel1, setSel1] = useState("")
    const params = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState({ id: "", sname: "",price:"" })
    const [employees, setEmployees] = useState({ id: "", email: "",first_name:"", last_name: "", password: ""})
    const [email, setEmail] = useState()
    const [customer, setCustomer] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    function handleDate(event) {setDate((event.target.value));}
    function handleTime(event) {setTime((event.target.value));}
    function handleAddAppointment(){
        let appointment = {
             
            employee :{id:sel1 } , 
            customers : customer ,
            services :{id:params.id} ,
            date:date,
            time:time
        }
        axios({
            method: 'post',
            url: `https://beautysalonplus.herokuapp.com/../api/appointment/add`,
            data: appointment
        });
        console.log(appointment)
        navigate("/Appointment");
    }
    useEffect(() => {
        axios.get(`https://beautysalonplus.herokuapp.com/../api/employee/service/${params.id}`)
        .then(response => {
            setEmployees(response.data)
            console.log(response.data)
        }) 
       
    },[] )
    useEffect(() => {
        axios.get(`https://beautysalonplus.herokuapp.com/../api/service/${params.id}`)
        .then(response => {
            setService(response.data)
           
        }) 
       
    },[] )

    useEffect(() => {
        let email = localStorage.getItem('email')
        setEmail(email)
        axios.get(`https://beautysalonplus.herokuapp.com/../api/customer/getCustomerbyemail/${email}`)
        .then(response => {
            
           setCustomer(response.data)
        }) 
       
    },[] )
    function handleSelect(event){
        setSel1(event.target.value) 
        
    }
       
    
    return (<>
    {email?(<>
        <div>
            
            <h4>Service Name : {service.sname} </h4>
            <h4>Service Price : {service.price} </h4>
            <h4>Service Materials : {service.materials} </h4>

        </div>
        <h1>Make appointment</h1>

        <br></br>
        <label>Select employee : </label>
        <select  class="s" onChange={handleSelect}>
                <option  class="c"value="">--Please choose an option--</option>
                {employees.length ? employees.map((emp, i) => {     
                          
                          // Return the element. Also pass key     
                          return ( <option value={emp.id}>{emp.firstName}</option>) 
                       }): <h4>null</h4>}
                
               
                
        </select>
        <br></br>
        <label>Appointment Date : </label>
        <input  class="n" type="text"  placeholder="Date" name="Date" onChange={handleDate} required/><br></br>
        <label>Appointment Time : </label>
        <input  class="n" type="text"  placeholder="Time" name="Date" onChange={handleTime} required/>
        <br></br>
        <button  class="s"onClick={handleAddAppointment} >Make Appointment </button> </>): (<h1>You need to login before</h1>) 
        }

        
        </>
    )
}