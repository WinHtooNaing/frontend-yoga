import React from 'react'
import { NavLink } from 'react-router-dom'

const EditClass = () => {
  return (
    <section id='content'>
     <div class="table-data" style={{width:"80%",marginLeft:"10%"}}>
                    <div class="order">
                        <div class="head">
                            <h3>Edit Class</h3>
                            
                        </div>
                        <NavLink to="/admin/class"> <button className="btn btn-success" style={{marginBottom:"20px"}}>back</button></NavLink>
                  
                        <form>
  <div class="mb-3">
    <label  class="form-label">Class Name</label>
    <input type="text" class="form-control" />
  </div>
  <div class="mb-3">
    <label  class="form-label">Trainer</label>
    <input type="text" class="form-control" />
  </div>
  <div class="mb-3">
    <label  class="form-label">Time</label>
    <input type="text" class="form-control" />
  </div>
  
  <button type="submit" class="btn btn-primary">Edit</button>
</form>
                </div>
                </div>
                
        </section>
  )
}

export default EditClass