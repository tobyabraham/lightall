import React, { useState } from 'react';
import '../styles/Quote.css';

function Quote() {
  const [name, setName] =useState("")
  const [phone, setPhone] =useState("")
  const [msg, setMsg] =useState("")
  const [mail, setMail] =useState("")

  interface FormDataType {name:string, phone: string, msg: string, mail: string}
  const responseBody: FormDataType = {name: "", phone: "", msg: "", mail: ""}

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    responseBody.name = name
    responseBody.mail = mail
    responseBody.phone = phone
    responseBody.msg = msg
    console.log(JSON.stringify(responseBody))
  }
  const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value)
}

  return (
    <div className='wrapper-quote'>
        <div className='quote-header'>
            <h1>Send us a message</h1>
            <p>We are committed to providing access to renewable energy across Africa, one community at a time</p>
        </div>
        <div className='quote-body'>
            <form className='quote-form' onSubmit={onSubmitHandler}>
                <div className='slantdiv'><input type="text" onChange={(e)=>inputChangeHandler(setName, e)} class="form-control" id="name" placeholder="Your name" /></div>
                <div className='slantdiv'><input type="email" onChange={(e)=>inputChangeHandler(setMail, e)} class="form-control" id="prdmail" placeholder="Email"  /></div>
                <div className='slantdiv'><input type="tel" onChange={(e)=>inputChangeHandler(setPhone, e)} class="form-control" id="phone" placeholder="Your phone number" /></div>
                <div className='slantdiv'><input type="text" onChange={(e)=>inputChangeHandler(setMsg, e)} class="form-control" id="prdtyp" placeholder="Message"  /></div>
                <input type="Submit" class="quote-btn" />
            </form>
        </div>
    </div>
  )
}

export default Quote