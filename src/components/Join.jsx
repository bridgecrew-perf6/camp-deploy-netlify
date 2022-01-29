import React from 'react';
import camp2 from "../images/camp2.jpg"

const Join = () => {
  return (
		<div className='container'id="About">
			<div className='row d-flex mt-5'>
				<div className='col-md-6'>
                    <img src={camp2} alt='camp' className='img-fluid ' />
                </div>
                <div className='col-md-6 pt-5'>
                    <small className='text-warning small-margin '>About us</small>
                    <h2 className='small-margin'>Why Camping</h2>
                    <p className='small-margin w-50 mb-3 text-muted'>
                        lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor
                        it amet, consectetur adip,lorem ipsum dolor sit amet
                        consectetur adip, lorem ipsum dolor sit amet,lorem ipsum dolor
                        sit amet
                    </p>
                    <button className='btn-text p-3 rounded-2 bg-dark border-0 text-white small-margin w-25'>
						Learn more
                    </button>
                </div>
            </div>
        </div>
	);
}

export default Join
