import axios from "axios";

const APIURL = "http://localhost:3002/";

function createCourseEnquiry(data) {
  return axios.post(`${APIURL}enquiries/`, data);
}
function allEnquiries(){
  return axios.get(`${APIURL}enquiries`)
  }

function allCourses() {
  return axios.get(`${APIURL}courses`);
}

function getCourseById(id){
  return axios.get(`${APIURL}courses/${id}`);
}
export{allCourses,createCourseEnquiry,allEnquiries,getCourseById};