import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgRightBottom from '../img/img-right-bottom.jpg';
import imgRightTop from '../img/img-right-top.jpg';
import imgLeft from '../img/img-left.jpg';

function Services() {
  return (
  <Container className="pt-5">
    <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-6">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 mt-4 pt-2">
                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src={imgLeft} class="img-fluid" alt="Image" />
                                <div class="img-overlay bg-dark"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-6">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src={imgRightTop} class="img-fluid" alt="Image" />
                                <div class="img-overlay bg-dark"></div>
                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12 mt-4 pt-2">
                            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src={imgRightBottom} class="img-fluid" alt="Image" />
                                <div class="img-overlay bg-dark"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6 col-md-6 col-12 order-1 order-md-2">
            <div class="section-title ml-lg-5">
                <h3 class="title mb-4">
                    <u>Our mission is to make your life easier.</u>
                </h3>
                <h1 class="text-custom font-weight-normal mb-3">Services</h1>
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
    </Container>
  );
}

export default Services;

