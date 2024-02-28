import React from 'react'
import '../../index.css'
import { Link, NavLink } from 'react-router-dom'
const Trainer = () => {
  return (
    <>
     <section id='content'>
        
        <div class="table-data" style={{width:"90%",marginLeft:"5%"}}>
                    <div class="order">
                        <div class="head">
                            <h3>Trainers</h3>
                            
                        </div>
                        <Link to="/admin/add-trainer"> <button className="btn btn-success" style={{marginBottom:"20px"}}>Add Trainer</button></Link>
                  
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
    <tr>
      <th scope="row">1</th>
      <td>Ma Hla Lay Nwe</td>
      <td>Yoga</td>
     
      <td><NavLink to="/admin/edit-trainer"><button className="btn btn-warning">Edit</button></NavLink>
      <bttton className="btn btn-danger mx-2">Delete</bttton></td>
    </tr>
   
  </tbody>
</table>
                </div>
                </div>
                
        </section>
</>
  )
}

export default Trainer