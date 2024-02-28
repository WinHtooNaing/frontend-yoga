import React from 'react'
import { Link } from 'react-router-dom'

const EditTrainer = () => {
  return (
    <section id='content'>
    <div class="table-data" style={{width:"80%",marginLeft:"10%"}}>
                   <div class="order">
                       <div class="head">
                           <h3>Edit Trainer</h3>
                           
                       </div>
                       <Link to="/admin/trainer"> <button className="btn btn-success" style={{marginBottom:"20px"}}>back</button></Link>
                 
                       <form>
 <div class="mb-3">
   <label  class="form-label">Name</label>
   <input type="text" class="form-control" />
 </div>
 <div class="mb-3">
   <label  class="form-label">Article</label>
   <input type="text" class="form-control" />
 </div>
 <div class="mb-3">
   <label  class="form-label">image</label>
   <input type="file" class="form-control" />
 </div>
 
 <button type="submit" class="btn btn-primary">Edit</button>
</form>
               </div>
               </div>
               
       </section>
  )
}

export default EditTrainer