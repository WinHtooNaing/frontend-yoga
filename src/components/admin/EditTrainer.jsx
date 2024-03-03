import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { TrainerForm } from '../../hooks/TrainerForm';
import { editTrainer, getTrainerById } from '../../services/trainerLocalstorage';
import Swal from 'sweetalert2';

const EditTrainer = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {inputValues,handleInputChange,resetForm,setForm} = TrainerForm({
    name:'',
    article:'',
    image:'',
  })
  useEffect(()=>{
    if(id){
      const trainer = getTrainerById(id);
      setForm(trainer);
      
    }
  },[id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTrainer(id,inputValues);
    resetForm();
    navigate("/admin/")
    Swal.fire({
      title: "Success",
      text: " Trainer Updating successful",
      icon: "success",
      confirmButtonText: "OK",
    });
  }
  return (
    <section id='content'>
    <div class="table-data" style={{width:"80%",marginLeft:"10%"}}>
                   <div class="order">
                       <div class="head">
                           <h3>Edit Trainer</h3>
                           
                       </div>
                       <Link to="/admin/"> <button className="btn btn-success" style={{marginBottom:"20px"}}>back</button></Link>
                 
                       <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" id="name" name="name" value={inputValues.name} onChange={handleInputChange}/>
              </div>
              <div class="mb-3">
                <label class="form-label">Article</label>
                <input type="text" class="form-control" id="article" name="article" value={inputValues.article} onChange={handleInputChange}/>
              </div>
              <div class="mb-3">
                <label class="form-label">image</label>
                <input type="text" class="form-control" id="image" name="image" value={inputValues.image} onChange={handleInputChange}/>
              </div>

              <button type="submit" class="btn btn-primary">
                Edit
              </button>
            </form>
               </div>
               </div>
               
       </section>
  )
}

export default EditTrainer