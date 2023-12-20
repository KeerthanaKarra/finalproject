import React, { useState } from 'react'

export const Login = () => {

  let [userInput, setUserInput] = useState({
    email:"",
    password:""
  })

  function loginUser(e) {
    e.preventDefault()
    fetch('http://localhost:5000/login', {
      method: "POST",
      body: JSON.stringify(userInput)
    })
      .then(res => res.json())
      .then(json => console.log(json))
  }

  function storeInputValue(e){
    const {value, name} = e
    setUserInput({...userInput, [name]:value})
  }
  return (
    <div className='d-flex justify-content-center'>
      <form className="form" onSubmit={(e)=>loginUser(e)}>
        <div className="title">Welcome,<br /><span>sign up to continue</span></div>
        <input className="input" name="email" placeholder="Email" type="email" value={userInput.email} onChange={(e)=> storeInputValue(e.target)}/>
        <input className="input" name="password" placeholder="Password" type="password" value={userInput.password} onChange={(e)=> storeInputValue(e.target)}/>

        <button className="button-confirm">Login →</button>
      </form>
    </div>
  )
}
