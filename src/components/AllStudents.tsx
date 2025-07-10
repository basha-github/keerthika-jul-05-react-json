import axios from "axios";
import React, { useEffect, useState } from "react";

import "../css/allstu.css";
import { useNavigate } from "react-router-dom";

export default function AllStudents() {
  const myPage = useNavigate();
  const [stuData, setSutData] = useState([]);

  const loadStudents = () => {
    axios
      .get("http://localhost:8080/jntu/keerthika/exam/stu/get/all")
      .then((res) => {
        setSutData(res.data);
      });
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const gotoStuForm = (e: FormDataEvent) => {
    e.preventDefault();
    myPage("/add");
  };

  const delRec = (id: any) => {
    let url = "http://localhost:8080/jntu/keerthika/exam/stu/del?id="+id;
    console.log(url);
    axios.delete(url).then(() => {
      loadStudents();
    });
  };

  return (
    <div className="stuTab">
      <button onClick={gotoStuForm} type="button" className="btn btn-primary">
        ADD
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">RollNo</th>
            <th scope="col">Name</th>
            <th scope="col">College</th>
            <th scope="col">Course</th>
            <th scope="col">Fee</th>
            <th scope="col">Marks</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {stuData.map((eachStu) => (
            <tr>
              <th scope="row">{eachStu.rollNo}</th>
              <td>{eachStu.name}</td>
              <td>{eachStu.college}</td>
              <td>{eachStu.course}</td>
              <td>{eachStu.fee}</td>
              <td>{eachStu.marks}</td>
              <td>
                <button
                  onClick={() => {
                    delRec(eachStu.rollNo);
                  }}
                  type="button"
                  className="btn btn-danger"
                >
                  delete
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-warning">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
