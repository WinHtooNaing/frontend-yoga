import React, { useEffect, useState } from 'react'
import { getListClass } from '../../services/classLocalstorage';
import Swal from 'sweetalert2';

const Class = () => {
    const [classes, setClasses] = useState([]);
  useEffect(() => {
    setClasses(getListClass());
  }, []);

  const plusInvalid = ()=> {
    Swal.fire({
        title: "Class is closed",
        text: " Class closing in this time",
        icon: "success",
        confirmButtonText: "OK",
      });
  }
  return (
    <>
        <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Class</h2>
                    </div>
                    <div class="col-12">
                        <a href="#">Home</a>
                        <a href="#">Class</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="class">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>Our Classes</p>
                    <h2>Class Shedule</h2>
                    
                </div>
                <div class="row">
                    <div class="col-12">
                        <ul id="class-filter">
                             <li data-filter="*"  class="filter-active">All Classes</li> 
                            
                        </ul>
                    </div>
                </div>
                <div class="row class-container">
                    
                    {
                        classes.map((data)=>(
                            <div class="col-lg-4 col-md-6 col-sm-12 class-item filter-2 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="class-wrap">
                            <div class="class-img">
                                <img src={data.image1} alt="Image"/>
                                
                                
                            </div>
                            
                            <div class="class-text">
                                <div class="class-teacher">
                                    <img src={data.image} alt="Image"/>
                                    <h3>{data.trainer}</h3>
                                    <a href="" onClick={()=>plusInvalid()}>+</a>
                                </div>
                                <h2>{data.class_name}</h2>
                                <div class="class-meta">
                                    <p><i class="far fa-clock"></i>{data.time}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                   
                    
                   
                    
                    
                            </div>
                        </div>
                    </div>
                
        
        
        <div class="discount wow zoomIn" data-wow-delay="0.1s" style={{marginBottom:"90px"}}>
            <div class="container">
                <div class="section-header text-center">
                    <p>Awesome Discount</p>
                    <h2>Get <span>30%</span> Discount for all Classes</h2>
                </div>
                <div class="container discount-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. 
                    </p>
                    <a class="btn">Join Now</a>
                </div>
            </div>
        </div>

    </>
  )
}

export default Class