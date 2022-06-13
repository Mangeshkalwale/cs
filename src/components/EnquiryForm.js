import React, { useEffect, useState } from 'react'
import { createCourseEnquiry, getCourseById } from '../services/CourseServices';
import { useNavigate, useParams } from 'react-router-dom'
export default function EnquiryForm() {
  const {id}=useParams();

  const [state,setState]=useState({name:'',email:'',experience:'',course_id:id,course_name:''});
  const navigate=useNavigate();
  const handler=(event)=>{
    const {name,value}=event.target;
    setState({...state,[name]:value});
  }
  const postData=(event)=>{
    event.preventDefault();
    createCourseEnquiry(state)
    .then(res=>{
        if(res.data){
            alert("Thanks For Placing Enquiry.");
            navigate("/");
        }
    })
    .catch(err=> console.log(err))
}

const [courseData,setCourseData]=useState([]);
useEffect(()=>{
  getCourseById(id)
    .then(res=>{
      console.log(res.data);
      setCourseData(res.data);
    }).catch(err=> console.log(err));
  },[]);

  return (
    <div >
        <div className='text-center col-md-6 text-white p-2 m-3'style={{backgroundColor:"darkblue"}}>Enquiry Form</div>
        <div className='col-md-6 p-4'>
        <form onSubmit={postData}>
        <div className='form-group'>
                <label>Course</label>
                <input type="text" placeholder='Course Name' name="course_name" className='form-control' value={courseData.name}/>
            </div>
            <div className='form-group'>
                <label>Description</label>
                <input type="text" placeholder='Description' name="description" className='form-control' value={courseData.description}/>
            </div>
            <div className='form-group'>
                <label>Hours</label>
                <input type="text" placeholder='Course Duration' name="course_duration" className='form-control' value={courseData.duration} />
            </div>
            

            <div className='form-group'>
                <label> User Name</label>
                <input type="text" placeholder='Enter your Name' name="name" className='form-control' onChange={handler} required/>
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type="email" placeholder='xyz@abc.com' name="email" className='form-control' onChange={handler} required/>
            </div>
           
     
            <input type="submit" value="Submit Enquiry" className='btn btn-primary mt-3 '/>
        </form>
        </div>
    </div>
  )
}
