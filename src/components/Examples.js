import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ImageComparison } from './ImageComparison';

import ImageBefore1 from '../img/beforeafter/before1.jpg'; 
import ImageAfter1 from '../img/beforeafter/after1.jpg';
import ImageBefore2 from '../img/beforeafter/before2.jpg'; 
import ImageAfter2 from '../img/beforeafter/after2.jpg';
import ImageBefore3 from '../img/beforeafter/before3.jpg'; 
import ImageAfter3 from '../img/beforeafter/after3.jpg';

function Examples() {

  return (
	<div className = "text-white bg-primary">
	<Container id="examples" className="pb-5 pt-5 mt-5 mb-5">
		<Row>
			<Col>
				<h1 className = "display-5 fw-bold text-center">Cleaning Examples</h1>
				<p className = "text-center">Slide on the image to view before and after photos of our work.</p>		
				<h3 className = "text-center">Whether it is deepstains or a deepclean, C.W. Clean N Go has you covered!</h3>		
			</Col>
		</Row>
		<Row>
			<Col xs={12} md={4} >
				<ImageComparison beforeImage={ImageBefore1} afterImage={ImageAfter1}/>
			</Col>
			<Col xs={12} md={4}  >
            	<ImageComparison beforeImage={ImageBefore2} afterImage={ImageAfter2}/>
			</Col>
			<Col xs={12} md={4} >
            	<ImageComparison beforeImage={ImageBefore3} afterImage={ImageAfter3}/>
			</Col>
		</Row>
	</Container>
	</div>
  );
}

export default Examples;

