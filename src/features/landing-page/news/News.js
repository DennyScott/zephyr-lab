import React from 'react';

import blogOne from '../../../assets/images/blog/1.jpg';
import blogTwo from '../../../assets/images/blog/2.jpg';
import blogThree from '../../../assets/images/blog/3.jpg';

const news = props => (
  <section className="module">
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="module-title text-center">
            <h2>Our News</h2>
            <p className="font-serif">We share our best ideas in our blog.</p>
          </div>
        </div>
      </div>
      <div className="row blog-grid">
        <div className="col-md-4 post-item">

          {/* Post */}
          <article className="post">
            <div className="post-preview"><a href="#"><img src={blogOne} alt="" /></a></div>
            <div className="post-wrapper">
              <div className="post-header">
                <h2 className="post-title"><a href="blog-single.html">Group Session Moments</a></h2>
                <ul className="post-meta h5">
                  <li>August 18, 2016</li>
                </ul>
              </div>
              <div className="post-content">
                <p>Marianne or husbands if at stronger ye. Considered is as middletons uncommonly. Promotion perfectly ye consisted so. His chatty dining for effect ladies active.</p>
              </div>
              <div className="post-more"><a href="#">Read More →</a></div>
            </div>
          </article>
          {/* Post end */}
        </div>
        <div className="col-md-4 post-item">

          {/* Post */}
          <article className="post">
            <div className="post-preview"><a href="#"><img src={blogTwo} alt="" /></a></div>
            <div className="post-wrapper">
              <div className="post-header">
                <h2 className="post-title"><a href="blog-single.html">Minimalist Chandelier</a></h2>
                <ul className="post-meta h5">
                  <li>August 18, 2016</li>
                </ul>
              </div>
              <div className="post-content">
                <p>Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution.</p>
              </div>
              <div className="post-more"><a href="#">Read More →</a></div>
            </div>
          </article>
          {/* Post end */}
        </div>
        <div className="col-md-4 post-item">

          {/* Post */}
          <article className="post">
            <div className="post-preview"><a href="#"><img src={blogThree} alt="" /></a></div>
            <div className="post-wrapper">
              <div className="post-header">
                <h2 className="post-title"><a href="blog-single.html">Green Land Sport Season</a></h2>
                <ul className="post-meta h5">
                  <li>August 18, 2016</li>
                </ul>
              </div>
              <div className="post-content">
                <p>Marianne or husbands if at stronger ye. Considered is as middletons uncommonly. Promotion perfectly ye consisted so. His chatty dining for effect ladies active.</p>
              </div>
              <div className="post-more"><a href="#">Read More →</a></div>
            </div>
          </article>
          {/* Post end */}
        </div>
      </div>
      <div className="row m-t-50">
        <div className="col-md-12">
          <div className="text-center"><a className="btn btn-lg btn-circle btn-brand" href="#">Visit blog</a></div>
        </div>
      </div>
    </div>
  </section>
);

export default news;
