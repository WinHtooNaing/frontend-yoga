import React, { useEffect, useState } from 'react'
import { getListTrainers } from '../../services/trainerLocalstorage';

const Trainer = () => {
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
                        <h2>Trainer</h2>
                    </div>
                    <div class="col-12">
                        <a href="">Home</a>
                        <a href="">Trainer</a>
                    </div>
                </div>
            </div>
        </div>


        <div class="team">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>Trainer</p>
                    <h2>Expert Trainers</h2>
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

export default Trainer