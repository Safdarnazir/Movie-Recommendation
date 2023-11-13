import React from 'react'
import "./contact.css"
const Contact= () => {
  return (
    <div className='container'>
        <div >
        <h1 style={{textAlign:"center"}}>CONTACT US</h1>
        </div>
  <div className='contact'>
    <form>
    <label>Enter Your Name <span className='a'>*</span></label>
    <input type='text' required></input>
    <label>Enter Your Email Address <span className='a'>*</span></label>
    <input type='email' required></input>
    <label>Enter Your Phone Number <span className='a'>*</span></label>
    <input type='tel'  pattern="[0-9]{10}" required></input>
    <label>How may we help you <span>*</span></label>
    <textarea ></textarea>
    <button>Submit</button>
    </form>
  </div>
    </div>
  )
}

export default Contact