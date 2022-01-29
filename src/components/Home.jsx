import React from 'react';
import NavigationBar from './MyNavbar';
import Test from './Text';
import Join from './Join';
import Services from './Services';
import Gallery from './GalleryHeader'
import Review from './Review';
import Footer from './Footer';

const Home = () => {
  return (
		<div>
			<div>
        <NavigationBar />
        <Test />
        <Join/>
        <Services />
        <Gallery />
        <Review />
        <Footer/>
			</div>
		</div>
	);
}

export default Home
