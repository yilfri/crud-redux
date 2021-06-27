import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

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
		// Ask to user if want delete product.
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to rever this",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
			cancelButtonText: 'Cancel'
		}).then((result) => {
			if (result.value) {
				dispatch(deleteProductAction(id));
			}
		});
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
