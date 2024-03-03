import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ClassForm } from "../../hooks/ClassForm";
import { addClass} from "../../services/classLocalstorage";
import Swal from 'sweetalert2';

const AddClass = () => {
  const navigate = useNavigate();

  const {inputValues,handleInputChange,resetForm} = ClassForm({
    class_name : '',
    trainer: '',
    time:'',
    image :'',
    image1:'',
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    addClass(inputValues);
    resetForm();
    navigate("/admin/class")
    Swal.fire({
      title: "Success",
      text: " Class creating successful",
      icon: "success",
      confirmButtonText: "OK",
    });
  }
  return (
    <section id='content'>
     <div class="table-data" style={{width:"80%",marginLeft:"10%"}}>
                    <div class="order">
                        <div class="head">
                            <h3>Add Class</h3>
                            
                        </div>
                        <NavLink to="/admin/class"> <button className="btn btn-success" style={{marginBottom:"20px"}}>back</button></NavLink>
                  
                        <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label  class="form-label">Class Name</label>
    <input type="text" class="form-control" id="class_name" name="class_name" value={inputValues.class_name} onChange={handleInputChange} />
  </div>
  <div class="mb-3">
    <label  class="form-label">Trainer</label>
    <input type="text" class="form-control" id="trainer" name="trainer" value={inputValues.trainer} onChange={handleInputChange}  />
  </div>
  <div class="mb-3">
    <label  class="form-label">Time</label>
    <input type="text" class="form-control" id="time" name="time" value={inputValues.time} onChange={handleInputChange}  />
  </div>
  <div class="mb-3">
    <label  class="form-label">image</label>
    <input type="text" class="form-control" id="image" name="image" value={inputValues.image} onChange={handleInputChange} />
  </div>
  <div class="mb-3">
    <label  class="form-label">class image</label>
    <input type="text" class="form-control" id="image1" name="image1" value={inputValues.image1} onChange={handleInputChange} />
  </div>
  
  <button type="submit" class="btn btn-primary">Add</button>
</form>
                </div>
                </div>
                
        </section>
  )
}

export default AddClass