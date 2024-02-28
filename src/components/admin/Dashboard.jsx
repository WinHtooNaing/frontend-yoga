import React from 'react'
import '../../index.css'
const Dashboard = () => {
  return (
    <>
        <section id='content'>
        
        <div class="table-data" style={{width:"90%",marginLeft:"5%"}}>
                    <div class="order">
                        <div class="head">
                            <h3>Recent Orders</h3>
                            
                        </div>
                   
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Location</th>
      <th scope="col">Order Date</th>
      <th scope='col'>Status</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Ma Hla Lay Nwe</td>
      <td>Barcelona</td>
      <td>12.3.5</td>
      <td><button className="btn btn-warning">attending</button></td>
      <td><bttton className="btn btn-danger">Cancle</bttton></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Ma Hla Lay Nwe</td>
      <td>Barcelona</td>
      <td>12.3.5</td>
      <td><button className="btn btn-warning">attending</button></td>
      <td><bttton className="btn btn-danger">Cancle</bttton></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ma Hla Lay Nwe</td>
      <td>Barcelona</td>
      <td>12.3.5</td>
      <td><button className="btn btn-warning">attending</button></td>
      <td><bttton className="btn btn-danger">Cancle</bttton></td>
    </tr>
  </tbody>
</table>
                </div>
                </div>
                
        </section>
    </>
  )
}

export default Dashboard