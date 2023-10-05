import React,{useEffect, useRef, useState} from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
function UseRef() {
//   let [count,setCount]= useState(0)
  let count = useRef(0)
  let [name,setName]= useState("")
  let ref1 = useRef()
  let ref2 = useRef()
  let ref3 = useRef()
  let ref4 = useRef()

  useEffect(()=>{
    count.current += 1
  })
 
  useEffect(()=>{
    ref1.current.focus()
  },[])

  const handleSubmit = ()=>{
    const otp=`${ref1.current.value}${ref2.current.value}${ref3.current.value}${ref4.current.value}`
    if(otp.length===4 && Number(otp)){
        alert(`Entered OTP is ${otp}`)
    }
    else{
        alert("Invalid OTP")
        ref1.current.value=""
        ref2.current.value=""
        ref3.current.value=""
        ref4.current.value=""
        ref1.current.focus()
    }
  }

  return<>
  <div className="container-fluid">
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">UseRef</h1>
    </div>
  <div>
    <Form.Group className="mb-3">
      <Form.Label>Address</Form.Label>
      <Form.Control type="text" name="name" placeholder="Enter Your Address..." onChange={(e)=>setName(e.target.value)}/>
    </Form.Group>
   
   
  
   <h2>Address  : {name}</h2>
   <br/>
    <h2>Component rendered : {count.current}</h2>
    <br/>
    <h2>Enter OTP</h2>
    {/* <div>
        <input type="text" className="input-box" ref={ref1} onChange={()=>ref2.current.focus()}/>
        <input type="text" className="input-box" ref={ref2} onChange={()=>ref3.current.focus()}/>
        <input type="text" className="input-box" ref={ref3} onChange={()=>ref4.current.focus()}/>
        <input type="text" className="input-box" ref={ref4} onChange={()=>setTimeout(()=>handleSubmit(),1000)}/>
    </div> */}
    <div>
        <input type='text' className="input-box" ref={ref1} onKeyUp={(e)=>{
            if(e.key==='Backspace' || e.key === 'Delete' && e.target.value.length===0)
                ref1.current.focus()
            else
                ref2.current.focus()
        }}/>
        <input type='text' className="input-box" ref={ref2} onKeyUp={(e)=>{
            if(e.key==='Backspace' || e.key === 'Delete' && e.target.value.length===0)
                ref1.current.focus()
            else
                ref3.current.focus()
        }}/>
        <input type='text' className="input-box" ref={ref3} onKeyUp={(e)=>{
            if(e.key==='Backspace' || e.key === 'Delete' && e.target.value.length===0)
                ref2.current.focus()
            else
                ref4.current.focus()
        }}/>
        <input type='text' className="input-box" ref={ref4} onKeyUp={(e)=>{
            if(e.key==='Backspace' || e.key === 'Delete' && e.target.value.length===0)
                ref3.current.focus()
        }}/>
    </div>
    <br/>
    <Button variant="primary" onClick={()=>handleSubmit()}>Submit</Button>
    </div>
    </div>
   
    </>
}

export default UseRef