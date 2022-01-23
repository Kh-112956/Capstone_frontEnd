import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Customer from "./salon/Customer";
import "./index.css";
import Homepage from "./salon/Homepage";
import Appointments from "./salon/Appointment";
import Employee from "./salon/Employee";
import Login from "./salon/login";
import Service from './salon/Services';
import  payment from "./salon/payment";
import Oneservice from "./salon/OneService" ;
import AddServiceToEmployee from"./salon/AddServiceToEmployee"
ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
      <Route path="Homepage" element={<Homepage />} />
        <Route path="Customer" element={<Customer/>}/> 
       <Route path="oneservice/:id" element={<Oneservice/>}/> 
       <Route path="Services" element={<Service/>}/> 
       <Route path="Appointment" element={<Appointments/>}/> 
       <Route path="Login" element = {<Login/>}/>
       <Route path="Employee" element={<Employee/>}/> 
       <Route path="AddServiceToEmployee" element={<AddServiceToEmployee/>}/> 
       
       <Route path="/" element={<Homepage />}/> 
       
     </Route>  
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
/*import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Customer from "./salon/Customer";
import "./index.css";
import Homepage from "./salon/Homepage";
import Homepage from "./salon/Services";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}/>
      <Route path="Homepage" element={<Homepage />} />
        <Route path="Customer" element={<Customer/>}/> 
        <Route path="Services" element={<Services/>}/> 
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);*/