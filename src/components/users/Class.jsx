import React from 'react'

const Class = () => {
  return (
    <>
        <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Class</h2>
                    </div>
                    <div class="col-12">
                        <a href="">Home</a>
                        <a href="">Class</a>
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
                    <div class="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
                        <div class="class-wrap">
                            <div class="class-img">
                                <img src="assets/img/class-1.jpg" alt="Image"/>
                            </div>
                            <div class="class-text">
                                <div class="class-teacher">
                                    <img src="assets/img/teacher-1.png" alt="Image"/>
                                    <h3>Elise Moran</h3>
                                    <a href="yogatitle.html">+</a> 
                                </div>
                                <h2>Yoga Class</h2>
                                <div class="class-meta">
                                    <p><i class="far fa-calendar-alt"></i>Sun, Tue, Thu</p>
                                    <p><i class="far fa-clock"></i>9:00 - 10:00</p>
                                  
                                </div>
                                
                            </div>
                        </div>
                        <div class="left">
                            <p>This is jfuerk jtfw4er</p>
                        </div>
                    </div>
                    
                   
                    <div class="col-lg-4 col-md-6 col-sm-12 class-item filter-2 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="class-wrap">
                            <div class="class-img">
                                <img src="assets/img/class-2.jpg" alt="Image"/>
                                
                                
                            </div>
                            
                            <div class="class-text">
                                <div class="class-teacher">
                                    <img src="assets/img/teacher-2.png" alt="Image"/>
                                    <h3>Kate Glover</h3>
                                    <a href="">+</a>
                                </div>
                                <h2>Cardio Class</h2>
                                <div class="class-meta">
                                    <p><i class="far fa-calendar-alt"></i>Sun, Tue, Thu</p>
                                    <p><i class="far fa-clock"></i>9:00 - 10:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 class-item filter-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="class-wrap">
                            <div class="class-img">
                                <img src="assets/img/class-3.jpg" alt="Image"/>
                            </div>
                            <div class="class-text">
                                <div class="class-teacher">
                                    <img src="assets/img/teacher-3.png" alt="Image"/>
                                    <h3>Elina Ekman</h3>
                                    <a href="">+</a>
                                </div>
                                <h2>Zumba Class</h2>
                                <div class="class-meta">
                                    <p><i class="far fa-calendar-alt"></i>Sun, Tue, Thu</p>
                                    <p><i class="far fa-clock"></i>9:00 - 10:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 class-item filter-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="class-wrap">
                            <div class="class-img">
                                <img src="assets/img/class-4.jpg" alt="Image"/>
                            </div>
                            <div class="class-text">
                                <div class="class-teacher">
                                    <img src="assets/img/teacher-4.png" alt="Image"/>
                                    <h3>Lilly Fry</h3>
                                    <a href="">+</a>
                                </div>
                                <h2>Workout Class</h2>
                                <div class="class-meta">
                                    <p><i class="far fa-calendar-alt"></i>Sun, Tue, Thu</p>
                                    <p><i class="far fa-clock"></i>9:00 - 10:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
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