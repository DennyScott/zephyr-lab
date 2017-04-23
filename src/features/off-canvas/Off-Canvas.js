import React from 'react';

import offCanvasImage from '../../assets/images/offcanvas.jpg';
import logo from '../../assets/images/logo-light.png';

const offCanvas = props => (
  <div className="off-canvas-sidebar">
    <div className="off-canvas-sidebar-wrapper">
      <div className="off-canvas-header"><a className="close-offcanvas" onClick={ () => {props.toggleSideMenu()} } href="#"><span className="arrows arrows-arrows-remove"></span></a></div>
      <div className="off-canvas-content">
        {/* Text widget */}
        <aside className="widget widget_text">
          <div className="textwidget">
            <p className="text-center"><img src={logo} width="100" alt="" /></p>
          </div>
        </aside>
        {/* Text widget */}
        <aside className="widget widget_text">
          <div className="textwidget">
            <p className="text-center"><img src={offCanvasImage} alt="" /></p>
          </div>
        </aside>
        {/* Navmenu widget */}
        <aside className="widget widget_nav_menu">
          <ul className="menu">
            <li className="menu-item menu-item-has-children"><a href="#">Home</a></li>
            <li className="menu-item"><a href="#">About Us</a></li>
            <li className="menu-item"><a href="#">Services</a></li>
            <li className="menu-item"><a href="#">Portfolio</a></li>
            <li className="menu-item"><a href="#">Blog</a></li>
            <li className="menu-item"><a href="#">Shortcodes</a></li>
          </ul>
        </aside>
        <ul className="social-icons">
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
          <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
          <li><a href="#"><i className="fa fa-vk"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default offCanvas;
