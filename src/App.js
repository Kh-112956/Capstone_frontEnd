/*import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function App() {
  const [Mycustomer, setMyCustomer] = useState({ Id: "", lname: "" ,fname:"" ,phone:"",state:"",Gender:"",city:""})//
  
  useEffect(() => {
    axios.get("api/customer")
      .then(response => {
        console.log(response.data)
        setMyCustomer(response.data[1])
      })
    return () => { }
  }, [])
  function handleClick() {
    axios({
      method: 'post',
      url: 'api/customer/add',
      data: {
        id: 5,
        name: "sara",
        email: "ffdfg@gfgbn",
        phon:1234567890
      }
    });
  }
  function handleClickDel() {
    axios({
      method: 'delete',
      url: "/api/customer/delete/4"
    })
  }
  return (
    <div>
      <br></br>
      <br></br>
      <h2>my customer details are:  {JSON.stringify(Mycustomer)}</h2>
      <button onClick={handleClick}>Post to Spring</button><br></br>
      <button onClick={handleClickDel}>Delete to Spring</button>
     
    
    </div>
  )
}*/
 
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.css"
import Logo from "./salon/img/Logo.png";
import {FaTwitter , FaInstagram , FaFacebook} from 'react-icons/fa'

//import { getPatients } from "./data";
export default function App() {
  // let [User, setUser] = useState(false);
  // let employee = getEmployees();
  // let NewArray = [];
  //   localStorage.setItem("MyNewArray", JSON.stringify(NewArray))
  // localStorage.setItem("MyEmployee", JSON.stringify(employee))
  // console.log(JSON.parse(localStorage.getItem("Myemployee")))
  return (
    <div className="tl">

      <h1><a href="https://twitter.com/search-advanced?lang=ar"><FaTwitter></FaTwitter></a>{"     "}
      <a href="https://www.instagram.com/"><FaInstagram></FaInstagram></a>{"     "}
      <a href="https://ar-ar.facebook.com/"><FaFacebook></FaFacebook></a>{"     "}
       </h1> 
      
      <img src={Logo} alt="logo" className="logo" />
      <nav style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}>
      {/* <img src={Logo} alt="logo" className="logo" /> */}
      <Link to="/Homepage"> <button className="A1">Homepage</button></Link> |{" "}
        <Link to="/Employee"><button  className="A6">Employee  </button></Link> |{" "}
        <Link to="/Services"><button className="A2">Services  </button></Link> |{" "}
        <Link to="/Customer"><button className="A3">Customer </button></Link> |{" "}
        <Link to="/AddServiceToEmployee"><button className="A3">Add Service To Employee </button></Link> |{" "}
        {/* <Link to="/Header"><button  className="A4"> Header </button></Link> |{" "} */}
        <Link to="/Login"><button className="A5">login </button></Link> |{" "}
        <Link to="/Appointment"><button className="A7"> Appointment </button></Link> |{" "}
        {/* <Link to="/AuthContext"><button className="A7">AuthContext </button></Link> |{" "} */}
        {/* <Link to="/payment"><button className="A8">payment </button></Link> |{" "} */}

      </nav>
      <Outlet />

    </div>
    
  );
}





