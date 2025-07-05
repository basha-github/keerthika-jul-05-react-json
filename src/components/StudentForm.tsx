import React, { useState } from "react";

import "../css/student.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StudentForm() {

    const allStuPage = useNavigate();

const [rollNo,setRollNo] = useState('');
const [name,setName] = useState('');
const [college,setCollege] = useState('');
const [course,setCourse] = useState('');
const [fee,setFee] = useState('');
const [marks,setMarks] = useState('');

const  getRollNo =(e:any)=>{
setRollNo(e.target.value);
}

const  getName =(e:any)=>{
setName(e.target.value);
}
const  getCollege =(e:any)=>{
setCollege(e.target.value);
}
const  getCourse =(e:any)=>{
setCourse(e.target.value);
}
const  getFee =(e:any)=>{
setFee(e.target.value);
}
const  getMarks =(e:any)=>{
setMarks(e.target.value);
}

const saveNewStudent = (e:FormDataEvent)=>{

    e.preventDefault();
    const stuObj = {rollNo,name,college,course,fee,marks};

    axios.post("http://localhost:1234/students",stuObj)
    .then(
        (res)=>{
allStuPage("/");
        }
    );


}


  return (
    <div className="stuform">
      <form>
        <div className="mb-3">
          <label className="form-label">RollNo</label>
          <input 
          onChange={getRollNo}
          type="text" className="form-control" />
        </div>
         <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
          onChange={getName}
          type="text" className="form-control" />
        </div>
         <div className="mb-3">
          <label className="form-label">College</label>
          <input 
          onChange={getCollege}
          type="text" className="form-control" />
        </div>
         <div className="mb-3">
          <label className="form-label">Course</label>
          <input 
          onChange={getCourse}
          type="text" className="form-control" />
        </div>
         <div className="mb-3">
          <label className="form-label">Fee</label>
          <input 
          onChange={getFee}
          type="text" className="form-control" />
        </div>
         <div className="mb-3">
          <label className="form-label">Marks</label>
          <input 
          
          onChange={getMarks}
          type="text" className="form-control" />
        </div>


        <button 
        
        onClick={saveNewStudent}
        type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
