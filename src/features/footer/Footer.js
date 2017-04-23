import React from 'react';

import logo from '../../assets/images/logo-light.png';

const footer = props => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          {/* Text widget */}
          <aside className="widget widget_text">
            <div className="textwidget">
              <p><img src={logo} width="100" alt="" /></p>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat.</p>E-mail: <a href="mailto:support@core.com">support@core.com</a> <br/>
              Phone: 8 800 123 4567 <br/>
              Fax: 8 800 123 4567 <br/>
            </div>
          </aside>
        </div>
        <div className="col-md-6 col-lg-3">
          {/* Recent entries widget */}
          <aside className="widget widget_recent_entries">
            <div className="widget-title">
              <h5>Recent Posts</h5>
            </div>
            <ul>
              <li><a href="#">Experience the sound of a modern and clean 360° Bluetooth Speaker.</a> <span className="post-date">May 8, 2016</span></li>
              <li><a href="#">Experience the sound of a modern and clean 360° Bluetooth Speaker.</a> <span className="post-date">April 7, 2016</span></li>
              <li><a href="#">Experience the sound of a modern and clean 360° Bluetooth Speaker.</a> <span className="post-date">April 7, 2016</span></li>
            </ul>
          </aside>
        </div>
        <div className="col-md-6 col-lg-3">
          {/* Twitter widget */}
          <aside className="widget twitter-feed-widget">
            <div className="widget-title">
              <h5>Twitter Feed</h5>
            </div>
            <div className="twitter-feed" data-twitter="345170787868762112" data-number="2"></div>
          </aside>
        </div>
        <div className="col-md-6 col-lg-3">
          {/* Tags widget */}
          <aside className="widget widget_tag_cloud">
            <div className="widget-title">
              <h5>Tags</h5>
            </div>
            <div className="tagcloud"><a href="#">bootstrap</a><a href="#">business</a><a href="#">corporate</a><a href="#">e-commerce</a><a href="#">portfolio</a><a href="#">responsive</a></div>
          </aside>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center"><span className="copyright">© 2017 Zephyr Labs, All Rights Reserved.</span></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default footer;
