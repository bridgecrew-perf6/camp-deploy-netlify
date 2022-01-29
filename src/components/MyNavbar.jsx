import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';


const NavigationBar = () => {
	return (
		<Navbar bg='warning' expand='lg' className='overflow-hidden'>
			<Container>
				<Navbar.Brand
					href='#'
					className='navHeader fs-3 display-3 text-dark mx-5'>
					Centrity Camp
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll' className='btn-pad overflow-hidden '>
					<Nav
						className='me-auto my-2 my-lg-0 mx-2 '
						style={{ maxHeight: '200px' }}
						navbarScroll>
						<Nav.Link href='/' className='text-dark lh-lg'>
							Home
						</Nav.Link>
						<Nav.Link href='#About' className='text-dark lh-lg'>
							About
						</Nav.Link>
						<Nav.Link href='#service' className='text-dark btn-pad lh-lg'>
							Service
						</Nav.Link>
						<Nav.Link href='#gallery' className='text-dark btn-pad lh-lg'>
							Gallery
						</Nav.Link>
						<Nav.Link href='#review' className='text-dark btn-pad lh-lg'>
							Review
						</Nav.Link>
					</Nav>
					<a href='#Footer'>
						<Button variant='outline-dark text-white btn-pad lh-lg'>
							Join us
						</Button>
					</a>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
