import React from 'react';
import Image from 'react-bootstrap/Image'
import companyLogo from '../img/logo.png';


function Hero() {
  return (
	<div class="bg-primary border-bottom">
	<div class="pt-5 text-center">
		<h1 class="text-white display-5 fw-bold">C. W. Clean N Go</h1>
			<div class="col-lg-6 mx-auto">
				<p class="text-white lead mb-0">Floor & Tile Company</p>
				<p class="text-white lead mb-0">Lincoln NE, Omaha NE & surrounding areas</p>
				<p class="text-white lead mb-0">(402) 613-4097</p>

			</div>
	</div>
	<div class="d-flex justify-content-center">
		<Image className="hero-image-negative-margin" fluid="true"  src={companyLogo} />
	</div>
	</div>
  );
}

export default Hero;



