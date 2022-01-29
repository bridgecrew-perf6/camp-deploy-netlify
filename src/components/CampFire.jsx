import React from 'react'
import camp1 from '../images/camp1.jpg';

const CampFire = () => {
  return (
		<div className='container'>
			<div className='row mt-5 '>
				<div className='col-md-6 mt-5 bg-light'>
					<small className='text-warning small-margin mb-2 fs-4 mb-3'>campfire</small>
					<h2 className='small-margin '>
						At centrity we here to help your camping exciting
					</h2>
					<p className='small-margin pe-5 mb-4 text-muted lh-lg'>
						lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor it
						amet, consectetur adip,lorem ipsum dolor sit amet consectetur adip,
						lorem ipsum dolor sit amet,lorem ipsum dolor sit amet, lorem ipsum
						dolor sit amet, consectetur adiplorem ipsum dolor it amet,
						consectetur adip,lorem ipsum dolor sit amet consectetur adip, lorem
						ipsum dolor sit amet,lorem ipsum dolor sit amet lorem ipsum dolor
						sit amet, consectetur adiplorem ipsum dolor it amet, consectetur
						adip,lorem ipsum dolor sit amet consectetur adip, lorem ipsum dolor
						sit amet,lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
						consectetur adiplorem ipsum dolor it amet, consectetur adip,lorem
						ipsum dolor sit amet consectetur adip, lorem ipsum dolor sit
						amet,lorem ipsum dolor sit amet.
					</p>
					<button className='btn-text p-3 mb-3 rounded-2 bg-dark border-0 text-white small-margin w-25'>
						Learn more
					</button>
				</div>
				<div className='col-md-6'>
					<img src={camp1} alt=' camping' className='img-fluid rounded-2 mb-5' />
				</div>
			</div>
		</div>
	);
}

export default CampFire
