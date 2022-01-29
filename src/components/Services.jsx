import React from 'react'
import camp12 from '../images/camp12.jpg'
import camp13 from '../images/camp13.jpg'
import camp14 from '../images/camp14.jpg';


const Services = () => {
    return (
			<div className='services-header p-5 mt-5 'id="service">
				<div className='col-12 text-dark text-center'>
					<h2 className='display-3'>Our Services</h2>
					<p className='w-50 m-auto'>
						lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
						amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
						lorem ipsum dolor sit amet, consectetur adip
					</p>
				</div>
				<div className='container'>
					<div className='row mt-5 text-center text-dark'>
						<div className='col-md-4 p-4 '>
							<img
								src={camp12}
								alt='fire'
								className='rounded-circle w-25 h-25 mb-2 img-fluid'
							/>
							<h3>Camping kits</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
								iusto hic consectetur sequi, necessitatibus harum delectus natus
								beatae deserunt, veritatis laboriosam ipsam unde labore et
								incidunt corporis placeat commodi repudiandae!
							</p>
							<button className='btn-text p-2 rounded-2 bg-dark border-0 text-white w-25'>
								Learn more
							</button>
						</div>
						<div className='col-md-4 p-4'>
							<img
								src={camp13}
								alt='fire'
								className='rounded-circle w-25 h-25 mb-3 img-fluid'
							/>
							<h3>Arrange stays</h3>
							<p >
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
								iusto hic consectetur sequi, necessitatibus harum delectus natus
								beatae deserunt, veritatis laboriosam ipsam unde labore et
								incidunt corporis placeat commodi repudiandae!
							</p>
							<button className='btn-text p-2 rounded-2 bg-dark border-0 text-white w-25'>
								Learn more
							</button>
						</div>
						<div className='col-md-4 p-4'>
							<img
								src={camp14}
								alt='fire'
								className='rounded-circle w-25 h-25 mb-2 img-fluid'
							/>
							<h3>Save Enviroment</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
								iusto hic consectetur sequi, necessitatibus harum delectus natus
								beatae deserunt, veritatis laboriosam ipsam unde labore et
								incidunt corporis placeat commodi repudiandae!
							</p>
							<button className='btn-text p-2 rounded-2 bg-dark border-0 text-white w-25'>
								Learn more
							</button>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Services;