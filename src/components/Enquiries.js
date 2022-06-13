import React, { useEffect, useState } from "react";
import { allEnquiries, getCourseById } from "../services/CourseServices";

export default function Enquiries() {
  const [enquirydata, setEnquiryData] = useState([]);
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    allEnquiries()
      .then((res) => {
        console.log(res.data);
        setEnquiryData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);




const getPost=(id)=>{
getCourseById(id)
.then(res=>{
setCourseData(res.data);
}).catch(err=>console.log(err));
}

  return (
   
   <div>

{enquirydata.map(enquiry=>
       

     

       <table class="table">
        <thead>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Course</th>
        </thead>
        <tbody>
          <tr key={enquiry.id}>
            <td>{enquiry.name}</td>
            <td>{enquiry.email}</td>
            <td>{enquiry.course_id}</td>
          </tr>
        </tbody>
       </table>
       )}

   </div>
    );
}
