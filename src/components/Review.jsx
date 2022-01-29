import React from 'react'
import camp15 from '../images/camp15.jpg'
// import { Link } from 'react-router-dom';

const Review = () => {
  return (
		<div>
			<div className='container' id='review'>
				<h2 className='text-warning text-center navHeader display-3'>
					Review by a Camper
				</h2>
				<div className='row d-flex mt-3'>
					<div className='col-md-6'>
						<img
							src={camp15}
							alt='camp'
							className='img-fluid w-100 h-75 rounded-2'
						/>
					</div>
					<div className='col-md-6 p-5'>
						<img
							src={camp15}
							alt='camper'
							className='rounded-circle w-50 h-25 mb-2 img-fluid text-center'
						/>
						<blockquote className='lh-lg'>
							lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor it
							amet, consectetur adip,lorem ipsum dolor sit amet consectetur
							adip, lorem ipsum dolor sit amet,lorem ipsum dolor sit amet, lorem
							ipsum dolor sit amet, consectetur adiplorem ipsum dolor it amet,
							consectetur adip,lorem ipsum dolor sit amet consectetur adip,
							lorem ipsum dolor sit amet,lorem ipsum dolor sit amet lorem ipsum
							dolor sit amet, consectetur adiplorem ipsum dolor it amet,
							consectetur adip,lorem ipsum dolor sit amet consectetur adip,
							lorem ipsum dolor sit amet,lorem ipsum dolor sit amet, lorem ipsum
							dolor sit amet, consectetur adiplorem ipsum dolor it amet,
							consectetur adip,lorem ipsum dolor sit amet consectetur adip,
							lorem ipsum dolor sit amet,lorem ipsum dolor sit amet.
						</blockquote>
						<p>
							Review by Andrew <span>1week ago</span>
						</p>
						<span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='gold'
								class='bi bi-star-fill'
								viewBox='0 0 16 16'>
								<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='gold'
								class='bi bi-star-fill'
								viewBox='0 0 16 16'>
								<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='gold'
								class='bi bi-star-fill'
								viewBox='0 0 16 16'>
								<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='gold'
								class='bi bi-star-fill'
								viewBox='0 0 16 16'>
								<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='gold'
								class='bi bi-star-fill'
								viewBox='0 0 16 16'>
								<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
							</svg>
						</span>
					</div>
					{/* <Link to=''>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='30'
							height='30'
							fill='gold'
							class='bi bi-arrow-up-circle-fill'
							viewBox='0 0 16 16'>
							<path d='M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z' />
						</svg>
					</Link> */}
				</div>
			</div>
		</div>
	);
}


export default Review
