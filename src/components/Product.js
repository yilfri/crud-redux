import React from 'react';
import { Link } from 'react-router-dom';

// Redux.
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../actions/productActions';

const Product = ({ product }) => {
	// Props destructuring
	const { name, price, id } = product;

	// Use dispatch create function
	const dispatch = useDispatch();

	// Handle click event.
	const handleDeleteProduct = (id) => {
		const productSelect = dispatch(deleteProductAction(id));
	};

	return (
		<tr>
			<td>{name}</td>
			<td>
				<span className="font-weight-bold">$ {price}</span>
			</td>
			<td className="acciones">
				<Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">
					Edit
				</Link>
				<button type="button" className="btn btn-danger" onClick={() => handleDeleteProduct(id)}>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default Product;
