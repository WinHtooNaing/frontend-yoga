import React, { useEffect, useState } from 'react'
import '../../index.css'
import { Link, useNavigate } from 'react-router-dom'
import { deleteTrainer, getListTrainers } from '../../services/trainerLocalstorage';
import Swal from 'sweetalert2';
const Trainer = () => {
  const [trainers,setTrainers] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    setTrainers(getListTrainers());
  },[]);
  const removeTrainer = (id) =>{
    deleteTrainer(id);
    setTrainers(getListTrainers())
    Swal.fire({
      title: "Success",
      text: " Trainer Deleting successful",
      icon: "success",
      confirmButtonText: "OK",
    });
  }
  return (
    <>

     <section id='content'>
        
        <div class="table-data" style={{width:"90%",marginLeft:"5%"}}>
                    <div class="order">
                        <div class="head">
                            <h3>Trainers</h3>
                            
                        </div>
                        <Link to="/admin/add-trainer"> <button className="btn btn-success" style={{marginBottom:"20px"}}>Add Trainer</button></Link>
                  
                       {
                        trainers.length >0 ? (
                          <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">No</th>
                              <th scope="col">Trainer Name</th>
                              <th scope="col">Article</th>
                              <th scope='col'>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              trainers.map((data,index)=>(
                                
                                <tr key={data.id}>
                              <th scope="row">{index+1}</th>
                              <td>{data.name}</td>
                              <td>{data.article}</td>
                              <td>
                                <button className='btn btn-warning' onClick={()=>{navigate(`/admin/edit-trainer/${data.id}`)}}>Edit</button>
                              <bttton className="btn btn-danger mx-2" onClick={()=> removeTrainer(data.id)}>Delete</bttton></td>
                            </tr>
                              ))
                            }
                           
                          </tbody>
                        </table>
                        ) :(
                          <h3 class="text-center">No Trainer</h3>
                        )
                       }
                </div>
                </div>
                
        </section>
</>
  )
}

export default Trainer