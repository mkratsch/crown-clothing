import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
const HatsPage = () => (
	<div>
		<h1>HatsPage</h1>
	</div>
);

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route path='/shop' element={<ShopPage />} />
				<Route path='/shop/hats' element={<HatsPage />} />
			</Routes>
		</div>
	);
}

export default App;
