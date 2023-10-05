// import React, {useEffect,useState} from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';

// function Edit({data,setData}) {
//   const params = useParams()
//   let [name,setName]= useState("")
//   let [username,setUserName]= useState("")
//   let [email,setEmail]= useState("")
//   let [mobile,setMobile]= useState("")
//   let [batch,setBatch]= useState("")
//   let navigate = useNavigate() 
  
//   //useEffect without dependency array - 
//   //1. When component loads for the first time
//   //2. When any of the state changes
//   // useEffect(()=>{
//   //   console.log("Use Effect triggered")
//   // })

//   //useEffect with empty dependency array - 
//   //1. When component loads for the first time.
//   // useEffect(()=>{
//   //   console.log("Use Effect triggered")
//   // },[])

//   //useEffect with dependency array - 
//   //1. When component loads for the first time.
//   //  useEffect(()=>{
//   //    console.log("Use Effect triggered")
//   //  },[name,email])

//   const getData = (index)=>{
//      setName(data[index].name)
//      setUserName(data[index].username)
//      setEmail(data[index].email)
//      setMobile(data[index].mobile)
//      setBatch(data[index].batch)
//   }

//   useEffect(()=>{
//     // console.log("UseEffect triggered")
//     if(Number(params.id)<data.length)
//     {
//      getData(Number(params.id))
//     }
//     else{
//       navigate("/dashboard")
//     }
//   },[])

  
//   const handleEdit = ()=>{
//      let newArray = [...data]
//      newArray.splice(Number(params.id),1,{
//       name,
//       email,
//       username,
//       mobile,
//       batch
//      })
//      setData(newArray)
//      navigate('/dashboard')
//     }

//   return<>
//    <div className='container-fluid'>
//   <div className="d-sm-flex align-items-center justify-content-between mb-4">
//         <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
//     </div>
//     <Form>
//       <Form.Group className="mb-3">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text"value={name}  placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
//       </Form.Group>

//       <Form.Group className="mb-3">
//         <Form.Label>User Name</Form.Label>
//         <Form.Control type="text" value={username} placeholder="Enter User Name" onChange={(e)=>setUserName(e.target.value)}/>
//       </Form.Group>

//       <Form.Group className="mb-3">
//         <Form.Label>Email </Form.Label>
//         <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
//       </Form.Group>

//       <Form.Group className="mb-3">
//         <Form.Label>Mobile</Form.Label>
//         <Form.Control type="text" value={mobile} placeholder="Enter mobile" onChange={(e)=>setMobile(e.target.value)}/>
//       </Form.Group>

//       <Form.Group className="mb-3">
//         <Form.Label>Batch</Form.Label>
//         <Form.Control type="text" value={batch} placeholder="Enter batch" onChange={(e)=>setBatch(e.target.value)}/>
//       </Form.Group>

//       <Button variant="primary" onClick={()=>handleEdit()}>
//         Submit
//       </Button>
//     </Form>
//   </div>

//   </>
// }

// export default Edit

import React,{useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useParams,useNavigate } from 'react-router-dom';

const Edit = ({data,setData})=>{
  const params = useParams()
  const [initialValues,setInitialValues] = useState({
    name:"",
    email:"",
    username:"",
    mobile:"",
    batch:""
  })
  let navigate = useNavigate()

  const UserSchema = Yup.object().shape({
    name:Yup.string().required('* Required'),
    username:Yup.string().required('* Required').min(3,'* User Name should be atlest 3 characters'),
    email:Yup.string().email('* Invalid Email').required('* Required'),
    mobile:Yup.string().matches(/^\d{10}$/,'* Invalid Mobile Number').required('* Required'),
    batch:Yup.string()
  })

  const getData = (index)=>{
    let newValues = {...initialValues}
    newValues.name = data[index].name
    newValues.email = data[index].email
    newValues.mobile = data[index].mobile
    newValues.username = data[index].username
    newValues.batch = data[index].batch
    console.log(newValues)
    setInitialValues(newValues)
  }


  useEffect(()=>{
    if(Number(params.id)<data.length)
    {
        getData(Number(params.id))
    }
    else
    {
      navigate('/dashboard')
    }
  },[])


  return <>
    <div className='container-fluid'>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
      </div>
      <div className='row'>
        <Formik
          initialValues={initialValues}
          validationSchema={UserSchema}
          enableReinitialize={true}
          onSubmit={(values)=>{
            let newArray = [...data]//immutable deep copy
            newArray.splice(params.id,1,values)
            setData(newArray)//state update
            navigate('/dashboard')
          }}
        >
          {({ values,errors,touched,handleBlur,handleSubmit,handleChange})=>(
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value = {values.name} name='name' placeholder="Enter Name" onBlur={handleBlur} onChange={handleChange}/>
                {errors.name && touched.name ? <div style={{color:"red"}}>{errors.name}</div>:null}
              </Form.Group>
    
              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" value = {values.username} name='username' placeholder="Enter User Name" onBlur={handleBlur} onChange={handleChange}/>
                {errors.username && touched.username ? <div style={{color:"red"}}>{errors.username}</div>:null}
              </Form.Group>
              
            
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value = {values.email} name='email' placeholder="Enter email"  onBlur={handleBlur} onChange={handleChange}/>
                {errors.email && touched.email ? <div style={{color:"red"}}>{errors.email}</div>:null}
              </Form.Group>
    
              <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" value = {values.mobile} name='mobile' placeholder="Enter Mobile" onBlur={handleBlur} onChange={handleChange}/>
                {errors.mobile && touched.mobile ? <div style={{color:"red"}}>{errors.mobile}</div>:null}
              </Form.Group>
    
              <Form.Group className="mb-3">
                <Form.Label>Batch</Form.Label>
                <Form.Control type="text" value = {values.batch} name='batch' placeholder="Enter Batch" onBlur={handleBlur} onChange={handleChange}/>
                {errors.batch && touched.batch ? <div style={{color:"red"}}>{errors.batch}</div>:null}
              </Form.Group>
    
              <Button variant="primary" type='submit'>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
     </div>
    </div>
  </>
}

export default Edit