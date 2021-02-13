import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import SearchBar from './SearchBar.jsx';
import MainNavigation from './MainNavigation.jsx';

function Nav({ onSearch }) {
	return (
		<nav>
			<div className='container'>
				<h1 className='brand'>
					<Link to='/'>{'{ EWA }'}</Link>
				</h1>
				<MainNavigation />
				<SearchBar onSearch={onSearch} />
			</div>
		</nav>
	);
}

export default Nav;
