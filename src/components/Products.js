import React, { useEffect } from 'react';
import Product from './Product';

//Redux.
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../actions/productActions';

const Products = () => {
	// Use dispatch create function
	const dispatch = useDispatch();

	// Get data from state of store.
	const products = useSelector((state) => state.products.products);
	const error = useSelector((state) => state.products.error);
	const loading = useSelector((state) => state.products.loading);

	// Get products when website load.
	useEffect(() => {
		const gettingProducts = () => dispatch(getProductsAction());
		gettingProducts();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<h2 className="text-center my-5">Products List</h2>
			{error ? (
				<p className="font-weight-getByPlaceholderText alert alert-danger text-center mt-4">
					Something is wrong
				</p>
			) : null}

			{loading ? <p className="text-center">Loading...</p> : null}

			<table className="table table-striped">
				<thead className="bg-primary table-dark">
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Price</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{products.lenght === 0
						? 'No have products'
						: products.map((product) => <Product key={product.id} product={product} />)}
				</tbody>
			</table>
		</>
	);
};

export default Products;
