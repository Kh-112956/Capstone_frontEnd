import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function AddServiceToEmployee() {
    const [id, setId] = useState("")
    const [lname, setLname] = useState("")
    const [fname, setFname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [employees, setEmployees] = useState("")
    const [services, setServices] = useState("")
    const [sel1, setSel1] = useState("")
    const [sel2, setSel2] = useState("")
    let [delid,setdelid]= useState("") 
    const [myemployee, setEmployee] = useState({ id: "", email: "",first_name:"", last_name: "", password: ""})
    
    function handleId(event) {
        setId((event.target.value));   
    }
    function handleIDel(event) {
        setdelid((event.target.value));
        
        
    }
    function handleLname(event) {
        setLname((event.target.value));
    }
    function handleFname(event) {
        setFname((event.target.value));
    }
    function handleEmail(event) {
        setEmail((event.target.value));
    }
    function handlePassword(event) {
        setPassword((event.target.value));
    }
    
    function handleAddEmployee()  {
       let a= { id: id, email: email,firstName:fname, lastName:lname, password: password}
       console.log("data:" , a)
       axios({
        method: 'post',
        url: 'api/employee/add',
        data: a
    });

    }

    function handleSelect1(event){
        setSel1(event.target.value) 
    }
    function handleSelect2(event){
        setSel2(event.target.value) 
    }
    function handleDeleteEmployee(event)  {
        setLname((event.target.value));
        
        console.log("data:" , delid)
        axios({
            method:'delete',
            url:`api/employee/delete/${delid}`,
  });
 
     }
     function handleAddServiceToEmployee(){
        let a = {
            idEmployee : sel1 , 
            idService: sel2
        }
        axios({
            method: 'post',
            url: `api/employee/service/${sel1}/${sel2}`,
            data: ""
        });
    
        console.log(a)
     }
     useEffect(() => {
        axios.get("api/employee")
            .then(response => {
                console.log(response.data)
                setEmployees(Array.from(response.data))
            })
        return () => { }
    }, [])
    useEffect(() => {
        axios.get("api/service")
            .then(response => {
                console.log(response.data)
                setServices(response.data)
            })
        return () => { }
    }, [])

    return (
        <div>
            <h1>Add service to employee</h1>
            <br></br>
            <label > Select Employee:</label>
            <br></br>
           <select  class="s"name="pets" id="pet-select" onChange={handleSelect1}>
                <option value="">--Please choose an option--</option>
                {employees.length ? employees.map((empl, i) => {     
                          
                          // Return the element. Also pass key     
                          return ( <option value={empl.id}>{empl.firstName}</option>) 
                       }): <h4>null</h4>}
            </select>

            <br></br>
            <label > Select Service:</label>
            <br></br>
           <select class="s" onChange={handleSelect2}>
                <option value="">--Please choose an option--</option>
                {services.length ? services.map((ser, i) => {     
                          
                          // Return the element. Also pass key     
                          return ( <option value={ser.id}>{ser.sname}</option>) 
                       }): <h4>null</h4>}
                
            </select>
            <br></br>
            <button class="sr"onClick={handleAddServiceToEmployee} >Add Service to Employee </button>

     </div>
    )
}