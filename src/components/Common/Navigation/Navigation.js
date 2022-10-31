import React from 'react';
import {Link} from "react-router-dom"

const Navigation = () => {
    return (
        <div>
                <header>
      <div class="header-area">
        <div class="main-header header-sticky">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-2 col-md-1">
                <div class="logo">
                  <a href="index.html"
                    ><img
                      src="assets/img/logo/xlogo.png.pagespeed.ic.pzNfKypZwg.png"
                      alt=""
                  /></a>
                </div>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10">
                <div
                  class="menu-main d-flex align-items-center justify-content-end"
                >
                  <div class="main-menu f-right d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="services">Services</Link></li>
                        <li><Link to="portfolio">Portfolio</Link></li>
                        <li><Link to="blog">Blog</Link></li>

                        {/* <li>
                          <a href="#">Page</a>
                          <ul class="submenu">
                            <li><a href="blog.html">Blog</a></li>
                            <li>
                              <a href="blog_details.html">Blog Details</a>
                            </li>
                            <li><a href="elements.html">Element</a></li>
                            <li>
                              <a href="portfolio_details.html"
                                >Portfolio Details</a
                              >
                            </li>
                          </ul>
                        </li> */}
                       <li><Link to="contact">Contact</Link></li>
                      </ul>
                    </nav>
                  </div>
                  <div class="header-right-btn f-right d-none d-xl-block ml-20">
                    <a href="#" class="btn header-btn">Get Free Consultent</a>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div class="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
        </div>
    );
};

export default Navigation;