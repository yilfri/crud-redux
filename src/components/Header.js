import React from 'react';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar dark bg-primary justify-content-between">
			<div className="container">
				<h1>CRUD - REACT, REDUX, REST API & AXIOS</h1>
			</div>

			<a className="btn btn-danger nuevo-post d-block d-md-inline-block" href="/products/new">
				Add Product &#43;
			</a>
		</nav>
	);
};

export default Header;
