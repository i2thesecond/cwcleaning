import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgRightBottom from '../img/img-right-bottom.jpg';
import imgRightTop from '../img/img-right-top.jpg';
import imgLeft from '../img/img-left.jpg';

function Services() {
  return (
  <Container id="services" className="pt-5 pb-5 mt-5 mb-5">
    <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-6">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 mt-4 pt-2">
                            <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src={imgLeft} className="img-fluid" alt="Image" />
                                <div className="img-overlay bg-dark"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-6">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src={imgRightTop} className="img-fluid" alt="Image" />
                                <div className="img-overlay bg-dark"></div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 mt-4 pt-2">
                            <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src={imgRightBottom} className="img-fluid" alt="Image" />
                                <div className="img-overlay bg-dark"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
            <div className="section-title ml-lg-5">
                <div className = "card text-white bg-primary border-primary container-services-shadow">
                <div className='card-body'>
                    <h3 className="title mb-4">
                        <u>Our mission is to make your life easier.</u>
                   </h3>
                    <h1 className="text-custom font-weight-normal mb-3">Our Services</h1>
			    	<h4>We offer the following:</h4>
			    	<ul>
			    		<li>Carpet Cleaning</li>
			    		<li>Upholstery Cleaning</li>
			    		<li>Hard Floor Cleaning</li>
			    		<li>Tile & Grout Cleaning</li>
			    		<li>Janitorial Services</li>
			    		<li>for both Commercial and Residential!</li>
			    	</ul>		
			    	<h4>Call (402) 613-4097 today for a free price estimation!</h4>
                </div>
                </div>
            </div>
        </div>
    </div>
    </Container>
  );
}

export default Services;

