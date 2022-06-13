import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './App.css';
import Course from './components/Course';
import EnquiryCourse from './components/Enquiries';
import EnquiryForm from './components/EnquiryForm';
import Enquiries from './components/Enquiries';
import Nav from './components/Nav';

function App() {
  return (

    <main>
    <Router>
    <Nav/>
    <section className='container'>
         <Routes>
            <Route path='/' element={<Course/>}/>
            <Route path="/enquirycourse/" element={<Enquiries/>}/>
            <Route path="/enquirylog" element={<EnquiryCourse/>}/>
            <Route path="/enquiries/:id" element={<EnquiryForm/>}/>
            <Route path="*" element={<h1 className='Text-align:center'>404 Page Not Found </h1>}/>
         </Routes>
    </section>
    </Router>
  </main>
  );
}

export default App;