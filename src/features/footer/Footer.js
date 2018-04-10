import React from "react";

import logo from "../../assets/images/logo-light.png";
import { connect } from "react-redux";
import moment from "moment";

const recentPost = post => (
  <li key={post.id}>
    <a href="#">{post.title}</a>
    <span className="post-date">{moment(post.created_at).format("LLL")}</span>
  </li>
);

const footer = props => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          {/* Text widget */}
          <aside className="widget widget_text">
            <div className="textwidget">
              <h3>Denny Scott</h3>
              <p>
                I'm a software developer who has developed games and web apps
                for a wide variety of platforms and services, from endless aisle
                displays to VR apps. Strong interest in realtime systems.{" "}
              </p>{" "}
              <p> Also love open source.</p>
            </div>
          </aside>
        </div>
        <div className="col-md-6 col-lg-3">
          {/* Recent entries widget */}
          <aside className="widget widget_recent_entries">
            <div className="widget-title">
              <h5>Recent Posts</h5>
            </div>
            <ul>{props.posts.slice(0, 3).map(post => recentPost(post))}</ul>
          </aside>
        </div>
        <div className="col-md-6 col-lg-3">
          {/* Twitter widget */}
          <aside className="widget twitter-feed-widget">
            <div className="widget-title">
              <h5>Contact</h5>
            </div>
            E-mail:{" "}
            <a href="mailto:dennyscott301@gmail.com">dennyscott301@gmail.com</a>
            <br />
            LinkedIn:{" "}
            <a
              target="_blank"
              href="http://www.linkedin.com/in/denny-scott-289b6484"
            >
              My Profile
            </a>{" "}
            <br />
            Github:{" "}
            <a target="_blank" href="http://www.github.com/DennyScott">
              Denny Scott
            </a>{" "}
            <br />
            Phone: 1 204 232 1690 <br />
          </aside>
        </div>
        <div className="col-md-6 col-lg-3">
          {/* Tags widget */}
          <aside className="widget widget_tag_cloud">
            <div className="widget-title">
              <h5>Tags</h5>
            </div>
            <div className="tagcloud">
              {props.tags.map((tag, i) => (
                <a href="#" key={i}>
                  {tag}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <span className="copyright">
                © 2017 Denny Scott, All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const mapStateToProps = state => ({
  posts: state.blog.posts,
  tags: state.tag
});

export default connect(mapStateToProps)(footer);
