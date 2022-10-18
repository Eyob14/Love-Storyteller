import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
                    <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/first_date.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Your First Date</h5>
              <p>
              What was it like when you meet for the first time?
              what was she dress, what did we do?
              </p>
              <p>
                <a href="#!" className="btn btn-warning mt-3">
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/wed_3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Your wedding</h5>
              <p>
              The best day of your life is the day you get married to your beloved one.
              This is the day you don't want to forget...
              </p>
              <p>
                <a href="#!" className="btn btn-warning mt-3">
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="images/anniversary_1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h5>Your Anniversary</h5>
              <p>
              This is the day you remember, what you achieved together.
              We help you to get a perfect anniversary.
              </p>
              <p>
                <a href="#!" className="btn btn-warning mt-3">
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="images/child_3.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h5> First Child</h5>
              <p>
              This is the day you become a parent. From the first date till this day.
              you pass through many obstacles and now you are here...
              </p>
              <p>
                <a href="#!" className="btn btn-warning mt-3">
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section id="about" className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="about-img">
                <img src="/images/vacation_2.jpg" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className="about-text">
                <h2>
                  We Provide the Best Quality <br /> Services Ever
                </h2>
                <p>
                any memory you have together with your partner will be safe with us.
                you can check it anytime you want. while you live your life, we will
                create your life story, that one day you will proud of and tell for
                your children and family. This is the story you will see it one day
                in the future after ages. So, what are you waiting join as add let's 
                right your love story together...
                </p>
                <a href="#!" className="btn btn-warning">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services section-padding" id="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Our Services</h2>
                <p>
                  storing your quality photos <br />
                  and unforgettable memory
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-laptop"></i>
                  <h3 className="card-title">Best Story</h3>
                  <p className="lead">
                  A documented love story you shared with your partner
                  for years
                  </p>
                  <button className="btn bg-warning text-dark">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-journal"></i>
                  <h3 className="card-title">Security</h3>
                  <p className="lead">
                  We preserve your memory securely and protect it from anyone.
                  </p>
                  <button className="btn bg-warning text-dark">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-intersect"></i>
                  <h3 className="card-title">Easy Access</h3>
                  <p className="lead">
                  With a click of a button you find your story and remember your
                  past and also share it.
                  </p>
                  <button className="btn bg-warning text-dark">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
