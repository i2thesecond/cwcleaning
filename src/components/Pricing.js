import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Pricing() {
  return (
	<Container className="pt-5">
		<Row>
			<Col>
			   <div class="card mb-4 box-shadow">
				  <div class="card-header">
					 <h4 class="my-0 font-weight-normal">Free</h4>
				  </div>
				  <div class="card-body">
					 <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
					 <ul class="list-unstyled mt-3 mb-4">
						<li>10 users included</li>
						<li>2 GB of storage</li>
						<li>Email support</li>
						<li>Help center access</li>
					 </ul>				  
					</div>
			   </div>
			   </Col>
			   <Col>
			   <div class="card mb-4 box-shadow">
				  <div class="card-header">
					 <h4 class="my-0 font-weight-normal">Carpet </h4>
				  </div>
				  <div class="card-body">
					 <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ sq ft.</small></h1>
					 <ul class="list-unstyled mt-3 mb-4">
						<li>Stain Removal</li>
						<li>Vaccuming</li>
						<li>Something</li>
						<li>Something</li>
					 </ul>				 
					 </div>
			   </div>
			   </Col>
			   <Col>
			   <div class="card mb-4 box-shadow">
				  <div class="card-header">
					 <h4 class="my-0 font-weight-normal">Enterprise</h4>
				  </div>
				  <div class="card-body">
					 <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
					 <ul class="list-unstyled mt-3 mb-4">
						<li>30 users included</li>
						<li>15 GB of storage</li>
						<li>Phone and email support</li>
						<li>Help center access</li>
					 </ul>
				  </div>
			   </div>
			   	</Col>
		</Row>
	</Container>
  );
}

export default Pricing;

