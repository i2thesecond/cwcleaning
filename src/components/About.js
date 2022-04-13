import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgAbout from '../img/img-about.png';

function About() {
  return (
	<Container id="about" className="pt-5 pb-5 mt-5 mb-5">
    <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-sm-2 order-2">
            <div className="section-title ml-lg-5">
                <div className = "card text-white bg-primary border-primary container-services-shadow">
                <div className='card-body'>
                    <h1 className="title mb-4">
						About Us
                   </h1>
					<p>With over 20 years experience with residential and commercial cleaning, we offer free quotes with the most competitive prices in the Lancaster area. We offer only the most exceptional cleaning services, specializing in quality carpet cleaning, tile & grout, upholstery cleaning, hard floor detailing services, and janitorial services to both commercial and residential customers. We are committed to delivering the highest level of service and the best quality cleaning available.</p>
					<p>Contact us today for some clean peace of mind.</p>
                </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-sm-1 order-1">
            <img src={imgAbout} className="img-fluid" alt="Image" />
        </div>
        </div>
    </Container>
  );
}

export default About;
