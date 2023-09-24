"use client"
import React from 'react'
import { useState } from 'react'
import "./Form.scss";
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import TableBooking from '../TableBooking/TableBooking'
import Confirmation from '../Confirmation/Confirmation'

const Form = () => {
 const [page,setPage]=useState(0);
 const [formData,setFormData]= useState({
    location:"Select Location",
    time:"",
    date:"",
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    numberOfPeople:"2",
 })

 const FormTitles=["Book A Table", "Personal Info", "Table Booked"];
 const PageDisplay = ()=>{
    if (page===0){
        return <TableBooking formData={formData} setFormData={setFormData}/>
    } else if (page===1){
        return<PersonalInfo  formData={formData} setFormData={setFormData}/>
    } else{
        return <Confirmation/>
    }
 }


  return (
    <div className="form">
        <div className="progressbar"></div>
        <div className="formContainer">
            <div className="title">
                <h1>{FormTitles[page]}</h1>
            </div>
            <div className="body">{PageDisplay()}</div>
            <div className="footers">
                <button  hidden={page===2 || page===0}
                onClick={() => {setPage((currItem) => currItem - 1);}}>Prev</button>
                <button  
                hidden={page===2}
                onClick={() => {
                    if(page === 1){
                        alert("FORM SUBMITTED")
                        setPage((currItem) => currItem + 1)
                    }else{
                      setPage((currItem) => currItem + 1);}}}>
                    {page === 1?"Confirm" : "Book A Table" }</button>
            </div>
        </div>
    </div>
  )
}

export default Form