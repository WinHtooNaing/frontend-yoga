import React, { useEffect, useState } from 'react'
import { getListTrainers } from '../../services/trainerLocalstorage';

const About = () => {
    const [trainers,setTrainers] = useState([]);
    useEffect(()=> {
        setTrainers(getListTrainers());
    },[])
  return (
    <>
         
        <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>About Us</h2>
                    </div>
                    <div class="col-12">
                        <a href="">Home</a>
                        <a href="">About Us</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="about wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-6">
                        <div class="about-img">
                            <img src="assets/img/about.png" alt="Image"/>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-6">
                        <div class="section-header text-left">
                            <p>Learn About Us</p>
                            <h2>Welcome to Yooga</h2>
                        </div>
                        <div class="about-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.
                            </p>
                            <a class="btn" href="">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="team">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>Trainer</p>
                    <h2>Expert Trainer</h2>
                </div>
                
                   
                    
                    
                    {
                    trainers.length > 0 ? (
                <div class="row">
                    
                   {
                    trainers.map((data)=>(
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="1.4s">
                        <div class="team-item">
                            <div class="team-img">
                                <img src={data.image} alt="Image"/>
                                <div class="team-social">
                                    <a href=""><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div class="team-text">
                                <h2>{data.name}</h2>
                                <p>{data.article}</p>
                            </div>
                        </div>
                    </div>
                    ))
                   }
                      
                   
                </div>
                 ) : (
                    <h1>No Trainer</h1>
                )
               }
                </div>
            </div>
       
    </>
  )
}

export default About