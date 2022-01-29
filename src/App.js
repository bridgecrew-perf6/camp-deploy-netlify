import { Routes, Route } from 'react-router-dom';
import GalleryPage from './components/GalleryPage';
import './index.css';
import Home from './components/Home';

function App() {
	return (
		
		<div className='App'>
			<div>
				<Routes>
					<Route
						path='/'
						element={<Home />}>
					</Route>
					<Route
						path='/src/components/GalleryPage.jsx'
						element={<GalleryPage />}>
					</Route>
				</Routes>
			</div>
		</div>
		
	);
}

export default App;
