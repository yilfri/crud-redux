import React, { useEffect } from 'react';

//Redux.
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../actions/productActions';

const Products = () => {
	// Use dispatch create function
	const dispatch = useDispatch();

	// Get products when website load.
	useEffect(() => {
		const gettingProducts = () => dispatch(getProductsAction());
		gettingProducts();
	}, []);

	return (
		<>
			<h2 className="text-center my-5">Products List</h2>

			<table className="table table-striped">
				<thead className="bg-primary table-dark">
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Price</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		</>
	);
};

export default Products;
