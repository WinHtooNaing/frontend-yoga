import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sessions = () => {
  return (
    <>
        <section id='content'>
        
        <div class="table-data" style={{width:"90%",marginLeft:"5%"}}>
                    <div class="order">
                        <div class="head">
                            <h3>Sessions</h3>
                            
                        </div>
                        <Link to="/admin/add-sessions"> <button className="btn btn-success" style={{marginBottom:"20px"}}>Add Sessions</button></Link>
                  
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col"> Title</th>
      <th scope="col">Desctiption</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Yoga bla bla</td>
      <td>Hello Hello , Are you lonely?I'm sorry . It just the chemical.</td>
      <td><NavLink to="/admin/edit-sessions"><button className="btn btn-warning">Edit</button></NavLink>
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

export default Sessions