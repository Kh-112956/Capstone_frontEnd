import React,{useEffect,useState} from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
export default function Appointments() {

const [allAppointments, setallAppointments] = useState("") 
useEffect(() => {
axios.get("api/appointment")
.then(response => {
setallAppointments(response.data)
           
}) 
       
},[] )
function deleteappointment(event, id){
console.log("data:" , id)
axios({
method:'delete',
url:`api/appointment/delete/${id}`,
});
 }
return (<>
<div>
<table style={{border:"1px  solid black"}}>
<tr>
  <td  style={{border:"1px  solid black"}} >Customer name </td>
  <td  style={{border:"1px  solid black"}} > Employee Name </td>
  <td  style={{border:"1px  solid black"}} > Service Name </td>
  <td  style={{border:"1px  solid black"}} > Service Price </td>
  <td  style={{border:"1px  solid black"}} > Appointment Date</td>
  <td  style={{border:"1px  solid black"}} > Appointment Date</td>
  <td  style={{border:"1px  solid black"}} > Delete appointment </td>
</tr>
{allAppointments.length ? allAppointments.map((appointment, i) => {                       
  // Return the element. Also pass key     
  return (                        
 <tr>
 <td  style={{border:"1px  solid black"}} >{appointment.customers.fname} {appointment.customers.lname } </td>
 <td  style={{border:"1px  solid black"}} >{appointment.employee.firstName} {appointment.employee.lastName}</td>
 <td  style={{border:"1px  solid black"}} >{appointment.services.sname}</td>
 <td  style={{border:"1px  solid black"}} >{appointment.services.price}</td>
 <td  style={{border:"1px  solid black"}} >{appointment.date}</td>
 <td  style={{border:"1px  solid black"}} >{appointment.time}</td>
  <td  style={{border:"1px  solid black"}} >   <button class="s"onClick={(event) => deleteappointment(event,appointment.id)}>Delete</button></td>
 </tr>                       
 ) 
}): <h4>null</h4>}
</table>
</div>
</>

    )
}









