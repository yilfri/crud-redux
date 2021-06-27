import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux.
import { useDispatch } from 'react-redux';
import { deleteProductAction, getEditProduct } from '../actions/productActions';

const Product = ({ product }) => {
	// Props destructuring
	const { name, price, id } = product;

	// Use dispatch create function
	const dispatch = useDispatch();

	// Use History create function
	const history = useHistory();

	// Handle click event - Delete Product.
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

	// Handle click event - Edit Product.
	const handleEditProduct = (product) => {
		dispatch(getEditProduct(product));
		history.push(`/products/edit/${product.id}`);
	};

	return (
		<tr>
			<td>{name}</td>
			<td>
				<span className="font-weight-bold">$ {price}</span>
			</td>
			<td className="acciones">
				<button
					type="button"
					onClick={() => handleEditProduct(product)}
					className="btn btn-primary mr-2"
				>
					Edit
				</button>
				<button type="button" className="btn btn-danger" onClick={() => handleDeleteProduct(id)}>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default Product;
