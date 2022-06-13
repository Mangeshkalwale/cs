import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allCourses } from "../services/CourseServices";



export default function Course() {
    const [courseData,setCourseData]=useState([]);

  useEffect(()=>{
    allCourses()
    .then(res=>{
      console.log(res.data);
      setCourseData(res.data);
    }).catch(err=> console.log(err));
  },[]);



  
  return (
    <div className="card m-2">
      <div className="card-body">
      <div className="card-header text-white"style={{backgroundColor: "#003366"}}>
             <h5 className="card-title text-center">Course List</h5>
             </div>
      <h2 className=" m-5" style={{backgroundColor:"red"}}> </h2>
      <div className="row container m-3" >
   {courseData.map(coursedata=>
       

       <div className="col-md-4 m-2" key={coursedata.id} >
         <div className="card" style={{ width: "18rem" }}>
           <div className="card-body">
           <div className="card-header text-white"style={{backgroundColor: "#003366"}}>
             <div className="card-title">{coursedata.name}</div>
             </div>
             <div className="card-text p-2">{coursedata.description}</div>
             <div className="card-text p-2"> <strong>Hours:</strong> {coursedata.hours} Hrs</div>
             <div className="card-text p-2"> <strong>Ratings:</strong> {coursedata.ratings} /5</div>
             <Link to={`/enquiries/${coursedata.id}`} className="btn btn-warning">Enquire Now</Link>
           </div>
         </div>
       </div>


       

       )}
       </div>
</div>
      </div>
   
  );
}
