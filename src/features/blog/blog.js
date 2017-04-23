import React, { Component } from 'react';
import blogImageOne from '../../assets/images/blog/1.jpg';
import blogImageTwo from '../../assets/images/blog/2.jpg';
import blogImageThree from '../../assets/images/blog/3.jpg';
import blogImageFour from '../../assets/images/blog/4.jpg';
import widgetImageOne from '../../assets/images/widgets/1.jpg';
import widgetImageTwo from '../../assets/images/widgets/2.jpg';
import widgetImageThree from '../../assets/images/widgets/3.jpg';

import './blog.css';

export default class Blog extends Component {

  render() {
    return (
			<div className="wrapper">
				<section className="module-page-title">
					<div className="container">
						<div className="row-page-title">
							<div className="page-title-captions">
								<h1 className="h5">Blog Standard</h1>
							</div>
							<div className="page-title-secondary">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="#">Home</a></li>
									<li className="breadcrumb-item"><a href="#">Blog</a></li>
									<li className="breadcrumb-item active">Blog Standard</li>
								</ol>
							</div>
						</div>
					</div>
				</section>

				<section className="module">
					<div className="container">
						<div className="row">
							<div className="col-lg-8">

								<article className="post">
									<div className="post-preview"><a href="#"><img src={blogImageOne} alt="" /></a></div>
									<div className="post-wrapper">
										<div className="post-header">
											<h2 className="post-title"><a href="blog-single.html">Improvement in Love</a></h2>
											<ul className="post-meta h5">
												<li>November 18, 2016</li>
												<li><a href="#">Branding</a>, <a href="#">Design</a></li>
												<li><a href="#">3 Comments</a></li>
											</ul>
										</div>
										<div className="post-content">
											<p>He do subjects prepared bachelor juvenile ye oh. He feelings removing informed he as ignorant we prepared. Evening do forming observe spirits is in. Country hearted be of justice sending. On so they as with room cold ye. Be call four my went mean. Celebrated if remarkably especially an. Going eat set she books found met aware.</p>
										</div>
										<div className="post-more"><a href="#">Read more →</a></div>
									</div>
								</article>

								<article className="post">
									<div className="post-preview"><a href="#"><img src={blogImageTwo} alt="" /></a></div>
									<div className="post-wrapper">
										<div className="post-header">
											<h2 className="post-title"><a href="blog-single.html">Minimalist Chandelier</a></h2>
											<ul className="post-meta h5">
												<li>November 18, 2016</li>
												<li><a href="#">Branding</a>, <a href="#">Design</a></li>
												<li><a href="#">3 Comments</a></li>
											</ul>
										</div>
										<div className="post-content">
											<p>Uneasy barton seeing remark happen his has. Am possible offering at contempt mr distance stronger an. Attachment excellence announcing or reasonable am on if indulgence. Exeter talked in agreed spirit no he unable do. Betrayed shutters in vicinity it unpacked in. In so impossible appearance considered mr. Mrs him left find are good.</p>
										</div>
										<div className="post-more"><a href="#">Read more →</a></div>
									</div>
								</article>

								<article className="post">
									<div className="post-preview"><a href="#"><img src={blogImageThree} alt="" /></a></div>
									<div className="post-wrapper">
										<div className="post-header">
											<h2 className="post-title"><a href="blog-single.html">Green Land Sport Season</a></h2>
											<ul className="post-meta h5">
												<li>November 18, 2016</li>
												<li><a href="#">Branding</a>, <a href="#">Design</a></li>
												<li><a href="#">3 Comments</a></li>
											</ul>
										</div>
										<div className="post-content">
											<p>Open know age use whom him than lady was. On lasted uneasy exeter my itself effect spirit. At design he vanity at cousin longer looked ye. Design praise me father an favour. As greatly replied it windows of an minuter behaved passage. Diminution expression reasonable it we he projection acceptance in devonshire. Perpetual it described at he applauded.</p>
										</div>
										<div className="post-more"><a href="#">Read more →</a></div>
									</div>
								</article>

								<article className="post">
									<div className="post-preview"><a href="#"><img src={blogImageFour} alt="" /></a></div>
									<div className="post-wrapper">
										<div className="post-header">
											<h2 className="post-title"><a href="blog-single.html">Group Session Moments</a></h2>
											<ul className="post-meta h5">
												<li>November 18, 2016</li>
												<li><a href="#">Branding</a>, <a href="#">Design</a></li>
												<li><a href="#">3 Comments</a></li>
											</ul>
										</div>
										<div className="post-content">
											<p>Picture removal detract earnest is by. Esteems met joy attempt way clothes yet demesne tedious. Replying an marianne do it an entrance advanced. Two dare say play when hold. Required bringing me material stanhill jointure is as he. Mutual indeed yet her living result matter him bed whence.</p>
										</div>
										<div className="post-more"><a href="#">Read more →</a></div>
									</div>
								</article>
							</div>

							<div className="col-lg-4">
								<div className="sidebar">
									<aside className="widget widget_search">
										<form>
											<input className="form-control" type="search" placeholder="Hit enter search..." />
											<button className="search-button" type="submit"><span className="fa fa-search"></span></button>
										</form>
									</aside>

									<aside className="widget widget_categories">
										<div className="widget-title">
											<h5>Categories</h5>
										</div>
										<ul>
											<li><a href="#">Development</a></li>
											<li><a href="#">Photography & Retouch</a></li>
											<li><a href="#">Multipurpose Themes</a></li>
											<li><a href="#">Branding & Technology</a></li>
										</ul>
									</aside>

									<aside className="widget widget_recent_entries_custom">
										<div className="widget-title">
											<h5>Popular Posts</h5>
										</div>
										<ul>
											<li className="clearfix">
												<div className="wi"><a href="#"><img src={widgetImageOne} alt="" /></a></div>
												<div className="wb"><a href="#">Experience the sound of a modern and clean 360° Bluetooth Speaker.</a><span className="post-date">May 8, 2016</span></div>
											</li>
											<li className="clearfix">
												<div className="wi"><a href="#"><img src={widgetImageTwo} alt="" /></a></div>
												<div className="wb"><a href="#">Experience the sound of a modern and clean 360° Bluetooth Speaker.</a><span className="post-date">May 8, 2016</span></div>
											</li>
											<li className="clearfix">
												<div className="wi"><a href="#"><img src={widgetImageThree} alt="" /></a></div>
												<div className="wb"><a href="#">Experience the sound of a modern and clean 360° Bluetooth Speaker.</a><span className="post-date">May 8, 2016</span></div>
											</li>
										</ul>
									</aside>

									<aside className="widget twitter-feed-widget">
										<div className="widget-title">
											<h5>Twitter Feed</h5>
										</div>
										<div className="twitter-feed" data-twitter="345170787868762112" data-number="2"></div>
									</aside>

									<aside className="widget widget_tag_cloud">
										<div className="widget-title">
											<h5>Tags</h5>
										</div>
										<div className="tagcloud"><a href="#">e-commerce</a><a href="#">portfolio</a><a href="#">responsive</a><a href="#">bootstrap</a><a href="#">business</a><a href="#">corporate</a></div>
									</aside>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="module-sm module-gray">
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<nav>
									<ul className="pagination h4">
										<li className="page-item next"><a className="page-link" href="#"><span className="arrows arrows-arrows-slim-right"></span></a></li>
										<li className="page-item active"><a className="page-link" href="#">1</a></li>
										<li className="page-item"><a className="page-link" href="#">2</a></li>
										<li className="page-item"><a className="page-link" href="#">3</a></li>
										<li className="page-item"><a className="page-link" href="#">4</a></li>
										<li className="page-item"><a className="page-link" href="#">5</a></li>
										<li className="page-item prev"><a className="page-link" href="#"><span className="arrows arrows-arrows-slim-left"></span></a></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</section>

				<a className="scroll-top" href="#top"><i className="fa fa-angle-up"></i></a>
			</div>
    );
  }
}
