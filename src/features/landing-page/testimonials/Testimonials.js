import React from 'react';

const testimonials = props => (
  <section className="module parallax bg-dark bg-dark-30" data-background="assets/images/module-4.jpg">
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="tms-slides owl-carousel">
            <div className="tms-item">
              <div className="tms-icons">
                <h2><span className="icon icon-basic-message-multiple"></span></h2>
              </div>
              <div className="tms-content">
                <blockquote>
                  <p>“If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals.”</p>
                </blockquote>
              </div>
              <div className="tms-author"><span>J.K. Rowling</span></div>
            </div>
            <div className="tms-item">
              <div className="tms-icons">
                <h2><span className="icon icon-basic-message-multiple"></span></h2>
              </div>
              <div className="tms-content">
                <blockquote>
                  <p>“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”</p>
                </blockquote>
              </div>
              <div className="tms-author"><span>Ralph Waldo Emerson</span></div>
            </div>
            <div className="tms-item">
              <div className="tms-icons">
                <h2><span className="icon icon-basic-message-multiple"></span></h2>
              </div>
              <div className="tms-content">
                <blockquote>
                  <p>“Imperfection is beauty, madness is genius and its better to be absolutely ridiculous than absolutely boring.”</p>
                </blockquote>
              </div>
              <div className="tms-author"><span>Marilyn Monroe</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default testimonials;
