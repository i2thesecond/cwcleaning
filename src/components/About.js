import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import imgAbout1 from '../img/img-about1.jpg'
import imgAbout2 from '../img/img-about2.jpg'
import imgAbout3 from '../img/img-about3.jpg'

function About() {
  return (
	<Container id="about" className="pt-5 pb-5 mt-5 mb-5">
    <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-12">
            <div className="section-title ml-lg-5">
                <div className = "card bg-info text-white container-services-shadow">
                <div className='card-body'>
                    <h1 className="title mb-4">
						About Us
                   </h1>
					<p className="about-paragraph-style">With over 20 years experience with residential and commercial cleaning, we offer free quotes with the most competitive prices in the Lancaster area. We offer only the most exceptional cleaning services, specializing in quality carpet cleaning, tile & grout, upholstery cleaning, hard floor detailing services, and janitorial services to both commercial and residential customers. We are committed to delivering the highest level of service and the best quality cleaning available.</p>
                </div>
                </div>
            </div>
        </div>
 
        <div className="col-lg-6 col-md-12 col-12 pt-3">
                <div className="row">
                    <div className="col-6">
                            <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                            <img src={imgAbout1} className="img-fluid" alt="Image" />
                            <div className="img-overlay bg-dark"></div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="row">
                            <div className="col-12 pt-3">
                                <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src={imgAbout2} className="img-fluid" alt="Image" />
                                <div className="img-overlay bg-dark"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 pt-3">
                               <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src={imgAbout3} className="img-fluid" alt="Image" />
                                <div className="img-overlay bg-dark"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </Container>
  );
}

export default About;
