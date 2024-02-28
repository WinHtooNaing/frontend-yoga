import React from 'react'

const Yoga = () => {
  return (
    <>
         <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Yoga Blog</h2>
                    </div>
                    <div class="col-12">
                        <a href="">Home</a>
                        <a href="">Yoga Page</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>From Blog</p>
                    <h2>Yoga Article</h2>
                </div>
                <div class="row">
                    <div class="col-12">
                        <ul id="portfolio-filter">
                            <li data-filter="*" class="filter-active">All Pose</li>
                            <li data-filter=".first">Pilates Yoga</li>
                            <li data-filter=".second">Vinyasa yoga</li>
                            <li data-filter=".third">Hatha Yoga</li>
                        </ul>
                    </div>
                </div>
                <div class="row portfolio-container">
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                        <div class="portfolio-wrap">
                            <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                <img src="assets/img/portfolio-1.jpg" alt="Portfolio Image"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                        <div class="portfolio-wrap">
                            <a href="img/portfolio-2.jpg" data-lightbox="portfolio">
                                <img src="assets/img/portfolio-2.jpg" alt="Portfolio Image"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp" data-wow-delay="0.5s">
                        <div class="portfolio-wrap">
                            <a href="img/portfolio-3.jpg" data-lightbox="portfolio">
                                <img src="assets/img/portfolio-3.jpg" alt="Portfolio Image"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp" data-wow-delay="0.7s">
                        <div class="portfolio-wrap">
                            <a href="img/portfolio-4.jpg" data-lightbox="portfolio">
                                <img src="assets/img/portfolio-4.jpg" alt="Portfolio Image"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp" data-wow-delay="0.9s">
                        <div class="portfolio-wrap">
                            <a href="img/portfolio-5.jpg" data-lightbox="portfolio">
                                <img src="assets/img/portfolio-5.jpg" alt="Portfolio Image"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp" data-wow-delay="1.1s">
                        <div class="portfolio-wrap">
                            <a href="img/portfolio-6.jpg" data-lightbox="portfolio">
                                <img src="assets/img/portfolio-6.jpg" alt="Portfolio Image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Yoga