import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Class = () => {
  return (
    <>
         <section id='content'>
        
        <div class="table-data" style={{width:"90%",marginLeft:"5%"}}>
                    <div class="order">
                        <div class="head">
                            <h3>Class</h3>
                            
                        </div>
                        <Link to="/admin/add-class"> <button className="btn btn-success" style={{marginBottom:"20px"}}>Add Class</button></Link>
                  
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Class Name</th>
      <th scope="col">Trainer</th>
      <th scope='col'>Time</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Yoga</td>
      <td>mg mg lay</td>
     <td>9:00-10:00</td>
      <td><NavLink to="/admin/edit-class"><button className="btn btn-warning">Edit</button></NavLink>
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

export default Class