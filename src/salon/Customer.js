import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Customer() {
    const [id, setid] = useState("")
    const [lname, setlname] = useState("")
    const [fname, setfname] = useState("")
    const [phone, setphone] = useState("")
    const [state, setstate] = useState("")
    const [City, setCity] = useState("")
    const [Gender, setGender] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    let [del,setdel]= useState("") 
    const [myCustemor, setMyCustemor] = useState({ id: "", lname: "",fname:"", phone: "", state: "", gender: "", city: ""  })
    
    function handelid(event) {
        setid((event.target.value));
    }
    function handellname(event) {
        setlname((event.target.value));
    }
    function handelfname(event) {
        setfname((event.target.value));
    }
    function handelphone(event) {
        setphone((event.target.value));
    }
    function handelstate(event) {
        setstate((event.target.value));
    }
    function handelGender(event) {
        setGender((event.target.value));
    }
    function handelcity(event) {
        setCity((event.target.value));
    }
    function handelemail(event) {
        setemail((event.target.value));
    }
    function handelpassword(event) {
        setpassword((event.target.value));
    }
    function handleClickDel3(event)  {
        setdel(event.target.value)
        console.log("del in handleclick "+del)
    }
    let nuwCustomer = {
        id: id,
        lname: lname,
        fname: fname,
        city: City,
        phone: phone,
        state: state,
        gender: Gender,
        email: email , 
        password: password
    }
    useEffect(() => {
        axios.get("https://beautysalonplus.herokuapp.com/api/customer")
            .then(response => {
                console.log(response.data)
                setMyCustemor(response.data[0])
            })
        return () => { }
    }, [])
    function handleClick() {
        console.log(nuwCustomer)
        axios({
            method: 'post',
            url: 'https://beautysalonplus.herokuapp.com/api/customer/add',
            data: nuwCustomer
        });
    }
    function handleClickDel2(){
       console.log("del "+del)
        axios({
          method:'delete',
          url:`https://beautysalonplus.herokuapp.com//api/customer/delete/${del}`,
        });
    }

    return (
        <div class="import1">
       
            
            <form className='Patient' >
                <div class="log">
                    <hr />
                    <br></br>
                    <label > Id Customer:</label>
                    
                    <input
                        type="number"
                        placeholder=""
                        name="Id"
                        onChange={handelid} required/>
                        <br></br>
                    <label > lname :</label>
                    <dr />
                    <input
                        type="text"
                        placeholder=""
                        name="lname"
                        onChange={handellname} required/>
                        <br></br>
                          <label > fname :</label>
                    <dr />
                    <input
                        type="text"
                        placeholder=""
                        name="name"
                        onChange={handelfname} required/>
                        <br></br>
                    <label > phone :</label>
                    <dr />
                    <input
                        type="number"
                        placeholder=""
                        name="phone"
                        onChange={handelphone}required />
                        <br></br>
                    <label > state:</label>
                    <dr />
                    <input
                        type="text"
                        placeholder=""
                        name="state"
                        onChange={handelstate} required/>
                    <br></br>
                    <label > Gender</label>
                    <dr />
                    <input
                        type="text"
                        placeholder=""
                        name=""
                        onChange={handelGender} required/>
                   <br></br>
                    <label > City</label>
                    <dr />
                    <input
                        type="text"
                        placeholder=""
                        name="city"
                        onChange={handelcity} required/>
                    <br></br>
                    <label > Email</label>
                    <dr />
                    <input
                        type="text"
                        placeholder=""
                        name="city"
                        onChange={handelemail} required/>
                    <br></br>
                    <label > Password</label>
                    <dr />
                    <input
                        type="text"
                        placeholder=""
                        name="city"
                        onChange={handelpassword} required/>    
                </div>

                <input class="c" type="submit" onClick={handleClick} value="Add Customer" /> 
            </form>

            <hr></hr>
            <h4>Delete Customer</h4>
            <input type="text" id="id" name="id" onChange={handleClickDel3} />
         <br />
         <input class="c" type="submit" value="Delete2" onClick={handleClickDel2}></input>
             {/* <h2>my details are:  {JSON.stringify(myCustemor)}</h2>
      <button onClick={handleClick}>Post</button>
      { <button onClick={handle1}>delete</button>  } */}
            <br />
     </div>
    )
}