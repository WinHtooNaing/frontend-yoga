import React, { useState } from "react";

const Index = () => {
  const [showAll, setShowAll] = useState(false);

  // Function to toggle the visibility of the entire content
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Content to be displayed
  const content = `
    Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi ornare
    velit non. Aliqua metus tortor auctor quis sem.  Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi ornare
    velit non. Aliqua metus tortor auctor quis sem.
  `;

  // Truncated content to be displayed initially
  const truncatedContent = showAll ? content : content.slice(0, 100);

  return (
    <>
      <div class="hero">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-6">
              <div class="hero-text">
                <h1>Yoga Practice For Good Health</h1>
                <p>{truncatedContent}</p>
                <div class="hero-btn">
                  {showAll ? (
                    <button className="btn" onClick={toggleShowAll}>
                      See Less
                    </button>
                  ) : (
                    <button className="btn" onClick={toggleShowAll}>
                      See More
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 d-none d-md-block">
              <div class="hero-image">
                <img src="assets/img/hero.png" alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-6">
              <div class="about-img">
                <img src="assets/img/about.png" alt="Image" />
              </div>
            </div>
            <div class="col-lg-7 col-md-6">
              <div class="section-header text-left">
                <p>Learn About Us</p>
                <h2>Welcome to Yooga</h2>
              </div>
              <div class="about-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                  vulputate. Aliquam metus tortor, auctor id gravida
                  condimentum, viverra quis sem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                  vulputate. Aliquam metus tortor, auctor id gravida
                  condimentum, viverra quis sem. Curabitur non nisl nec nisi
                  scelerisque maximus.
                </p>
                <a class="btn" href="">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="service">
        <div class="container">
          <div
            class="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <p>What we do</p>
            <h2>Yoga For Health</h2>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
              <div class="service-item">
                <div class="service-icon">
                  <i class="flaticon-workout"></i>
                </div>
                <h3>Heal emotions</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div class="service-item active">
                <div class="service-icon">
                  <i class="flaticon-workout-1"></i>
                </div>
                <h3>Body Refreshes</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div class="service-item">
                <div class="service-icon">
                  <i class="flaticon-workout-2"></i>
                </div>
                <h3>Mind & Serenity</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <div class="service-item">
                <div class="service-icon">
                  <i class="flaticon-workout-3"></i>
                </div>
                <h3>Enjoy Your life</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.8s">
              <div class="service-item">
                <div class="service-icon">
                  <i class="flaticon-workout-4"></i>
                </div>
                <h3>Body & Spirituality</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1s">
              <div class="service-item">
                <div class="service-icon">
                  <i class="flaticon-yoga-pose"></i>
                </div>
                <h3>Body & Mind</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="discount wow zoomIn" data-wow-delay="0.1s">
        <div class="container">
          <div class="section-header text-center">
            <p>Awesome Discount</p>
            <h2>
              Get <span>30%</span> Discount for all Classes
            </h2>
          </div>
          <div class="container discount-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec pretium mi. Curabitur facilisis ornare velit non vulputate.
              Aliquam metus tortor, auctor id gravida condimentum, viverra quis
              sem. Curabitur non nisl nec nisi scelerisque maximus.
            </p>
            <a class="btn">Join Now</a>
          </div>
        </div>
      </div>
      <div class="single">
        <div class="container">
          <div
            class="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          ></div>
          <div class="row">
            <div class="col-lg-8">
              <div class="single-content wow fadeInUp"></div>
              <div class="single-tags wow fadeInUp"></div>

              <div class="single-related wow fadeInUp">
                <h2>Related Post</h2>
                <div class="owl-carousel related-slider">
                  <div class="post-item">
                    <div class="post-img">
                      <img src="assets/img/post-1.jpg" />
                    </div>
                    <div class="post-text">
                      <a href="">
                        Lorem ipsum dolor sit amet consec adipis elit
                      </a>
                      <div class="post-meta">
                        <p>
                          By<a href="">Admin</a>
                        </p>
                        <p>
                          In<a href="">Design</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="post-item">
                    <div class="post-img">
                      <img src="assets/img/post-2.jpg" />
                    </div>
                    <div class="post-text">
                      <a href="">
                        Lorem ipsum dolor sit amet consec adipis elit
                      </a>
                      <div class="post-meta">
                        <p>
                          By<a href="">Admin</a>
                        </p>
                        <p>
                          In<a href="">Design</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="post-item">
                    <div class="post-img">
                      <img src="assets/img/post-3.jpg" />
                    </div>
                    <div class="post-text">
                      <a href="">
                        Lorem ipsum dolor sit amet consec adipis elit
                      </a>
                      <div class="post-meta">
                        <p>
                          By<a href="">Admin</a>
                        </p>
                        <p>
                          In<a href="">Design</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="post-item">
                    <div class="post-img">
                      <img src="assets/img/post-4.jpg" />
                    </div>
                    <div class="post-text">
                      <a href="">
                        Lorem ipsum dolor sit amet consec adipis elit
                      </a>
                      <div class="post-meta">
                        <p>
                          By<a href="">Admin</a>
                        </p>
                        <p>
                          In<a href="">Design</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="single-comment wow fadeInUp">
                <h2>3 Comments</h2>
                <ul class="comment-list">
                  <li class="comment-item">
                    <div class="comment-body">
                      <div class="comment-img">
                        <img src="assets/img/user.jpg" />
                      </div>
                      <div class="comment-text">
                        <h3>
                          <a href="">Josh Dunn</a>
                        </h3>
                        <span>01 Jan 2045 at 12:00pm</span>
                        <p>
                          Lorem ipsum dolor sit amet elit. Integer lorem augue
                          purus mollis sapien, non eros leo in nunc. Donec a
                          nulla vel turpis tempor ac vel justo. In hac platea
                          dictumst.
                        </p>
                        <a class="btn" href="">
                          Reply
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="comment-item">
                    <div class="comment-body">
                      <div class="comment-img">
                        <img src="assets/img/user.jpg" />
                      </div>
                      <div class="comment-text">
                        <h3>
                          <a href="">Josh Dunn</a>
                        </h3>
                        <p>
                          <span>01 Jan 2045 at 12:00pm</span>
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet elit. Integer lorem augue
                          purus mollis sapien, non eros leo in nunc. Donec a
                          nulla vel turpis tempor ac vel justo. In hac platea
                          dictumst.
                        </p>
                        <a class="btn" href="">
                          Reply
                        </a>
                      </div>
                    </div>
                    <ul class="comment-child">
                      <li class="comment-item">
                        <div class="comment-body">
                          <div class="comment-img">
                            <img src="assets/img/user.jpg" />
                          </div>
                          <div class="comment-text">
                            <h3>
                              <a href="">Josh Dunn</a>
                            </h3>
                            <p>
                              <span>01 Jan 2045 at 12:00pm</span>
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet elit. Integer lorem
                              augue purus mollis sapien, non eros leo in nunc.
                              Donec a nulla vel turpis tempor ac vel justo. In
                              hac platea dictumst.
                            </p>
                            <a class="btn" href="">
                              Reply
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="comment-form wow fadeInUp">
                <h2>Leave a comment</h2>
                <form>
                  <div class="form-group">
                    <label for="name">Name *</label>
                    <input type="text" class="form-control" id="name" />
                  </div>
                  <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" class="form-control" id="email" />
                  </div>
                  <div class="form-group">
                    <label for="website">Website</label>
                    <input type="url" class="form-control" id="website" />
                  </div>

                  <div class="form-group">
                    <label for="message">Message *</label>
                    <textarea
                      id="message"
                      cols="30"
                      rows="5"
                      class="form-control"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <input type="submit" value="Post Comment" class="btn" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
