import React, { useState } from 'react';
import '../styles/Quote.css';

function Quote() {
  const [name, setName] =useState("")
  const [phone, setPhone] =useState("")
  const [msg, setMsg] =useState("")

  interface FormDataType {name:string, phone: string, msg: string}
  const responseBody: FormDataType = {name: "", phone: "", msg: ""}

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    responseBody.name = name
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
            <h1>We’re Dedicated To Build A Cleaner Future</h1>
        </div>
        <div className='quote-body'>
            <form className='quote-form' onSubmit={onSubmitHandler}>
                <div className='slantdiv'><input type="text" onChange={(e)=>inputChangeHandler(setName, e)} class="form-control" id="name" placeholder="Your name" /></div>
                <div className='slantdiv'><input type="number" onChange={(e)=>inputChangeHandler(setPhone, e)} class="form-control" id="phone" placeholder="Your phone number" /></div>
                <div className='slantdiv'><input type="text" onChange={(e)=>inputChangeHandler(setMsg, e)} class="form-control" id="prdtyp" placeholder="Message"  /></div>
                <input type="Submit" class="quote-btn" />
            </form>
        </div>
    </div>
  )
}

export default Quote