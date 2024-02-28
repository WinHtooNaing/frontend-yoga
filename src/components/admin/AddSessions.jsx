import React from 'react'
import { NavLink } from 'react-router-dom'

const AddSessions = () => {
  return (
    <section id='content'>
     <div class="table-data" style={{width:"80%",marginLeft:"10%"}}>
                    <div class="order">
                        <div class="head">
                            <h3>Add Sessions</h3>
                            
                        </div>
                        <NavLink to="/admin/sessions"> <button className="btn btn-success" style={{marginBottom:"20px"}}>back</button></NavLink>
                  
                        <form>
  <div class="mb-3">
    <label  class="form-label">Title</label>
    <input type="text" class="form-control" />
  </div>
  <div class="mb-3">
    <label  class="form-label">Desctiption</label>
    <input type="text" class="form-control" />
  </div>
  <div class="mb-3">
    <label  class="form-label">Image</label>
    <input type="file" class="form-control" />
  </div>
  
  <button type="submit" class="btn btn-primary">Add</button>
</form>
                </div>
                </div>
                
        </section>
  )
}

export default AddSessions