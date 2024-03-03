import React from "react";
import Data from "../../Data/Data";
const Yoga = () => {
    const ZumbaSessions = Data.filter(item => item.session.toLowerCase().includes('yoga'));




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
              <a href="">ZumbYogaa Page</a>
            </div>
          </div>
        </div>
      </div>

      <div class="blog">
        <div class="container">
          <div
            class="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <p>From Blog</p>
            <h2>Yoga Articles</h2>
          </div>
          <div class="row blog-page">
            
            {ZumbaSessions.map((data) => (
              <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
                <div class="blog-item">
                  <div class="blog-img">
                    <img
                      src={data.image}
                      alt="Blog"
                      style={{ width: "350px", height: "250px" }}
                    />
                  </div>
                  <div class="blog-text">
                    <h2>{data.title}</h2>

                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Yoga;
