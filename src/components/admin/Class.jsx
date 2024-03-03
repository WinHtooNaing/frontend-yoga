import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import { deleteClass, getListClass } from "../../services/classLocalstorage";
import Swal from "sweetalert2";

const Class = () => {
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setClasses(getListClass());
  }, []);
  const removeClass = (id) => {
    deleteClass(id);
    setClasses(getListClass());
    Swal.fire({
      title: "Success",
      text: " Class Deleting successful",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  return (
    <>
      <section id="content">
        <div class="table-data" style={{ width: "90%", marginLeft: "5%" }}>
          <div class="order">
            <div class="head">
              <h3>Class</h3>
            </div>
            <Link to="/admin/add-class">
              {" "}
              <button
                className="btn btn-success"
                style={{ marginBottom: "20px" }}
              >
                Add Class
              </button>
            </Link>

            {
              classes.length > 0 ? (
                <table class="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Class Name</th>
                  <th scope="col">Trainer</th>
                  <th scope="col">Time</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  classes.map((data,index)=>(
                    <tr key={data.id}>
                  <th scope="row">{index+1}</th>
                  <td>{data.class_name}</td>
                  <td>{data.trainer}</td>
                  <td>{data.time}</td>
                  <td>
                    
                      <button className="btn btn-warning" onClick={()=>{navigate(`/admin/edit-class/${data.id}`)}}>Edit</button>
                    
                    <bttton className="btn btn-danger mx-2" onClick={()=> removeClass(data.id)}>Delete</bttton>
                  </td>
                </tr>
                  ))
                }
              </tbody>
            </table>
              ):(
                <h1>No Class</h1>
              )
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Class;
