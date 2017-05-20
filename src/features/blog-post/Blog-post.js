import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import store from '../../app/store';
import { fetchPost } from '../../actions/blog.js';
import Sidebar from '../blog/blog-sidebar/SideBar';

class BlogPost extends Component {

  static propTypes = {
    post: PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
    }).isRequired
  }

  componentWillMount() {
    store.dispatch(fetchPost(this.props.match.params.id));
  }

  render() {
    const { post } = this.props;
    return (
      <div className="Blog-Post module container">
        <div className="row">
          <div className="col-lg-8">
        <article className="post">
          <div className="post-preview"><a href="#"><img src={post.image === null ? "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg" : post.image} alt="" /></a></div>
          <div className="post-wrapper">
            <div className="post-header">
              <h2 className="post-title"><a href="blog-single.html">{post.title}</a></h2>
              <ul className="post-meta h5">
                <li>{moment(post.created_at).format('LLL')}</li>
              </ul>
            </div>
            <div className="blog-post-content" dangerouslySetInnerHTML={{__html: post.html}}>
            </div>
          </div>
        </article>
      </div>
        <Sidebar />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    post : state.post,
  }
);

export default connect(mapStateToProps)(BlogPost);
