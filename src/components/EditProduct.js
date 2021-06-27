import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../actions/productActions';
import { useHistory } from 'react-router-dom';

const EditProduct = () => {
	const dispatch = useDispatch();

	const history = useHistory();

	// State of product.
	const [product, setProduct] = useState({
		name: '',
		price: ''
	});

	// Producto to edit.
	const productEdit = useSelector((state) => state.products.productEdit);

	useEffect(() => {
		setProduct(productEdit);
	}, [productEdit]);

	const handleChangeProduct = (e) => {
		setProduct({
			...product,
			[e.target.name]: e.target.value
		});
	};

	const { name, price } = product;

	// Product to edit.
	const handleEdit = (e) => {
		e.preventDefault();

		dispatch(editProductAction(product));

		history.push('/');
	};

	return (
		<div className="row justify-content-center mt-5">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">Edit Product</h2>

						<form onSubmit={handleEdit}>
							<div className="form-group">
								<label>Product Name</label>
								<input
									type="text"
									placeholder="Product Name"
									className="form-control"
									name="name"
									value={name}
									onChange={handleChangeProduct}
								/>
							</div>

							<div className="form-group">
								<label>Product Price</label>
								<input
									type="number"
									placeholder="Product Price"
									className="form-control"
									name="price"
									value={price}
									onChange={handleChangeProduct}
								/>
							</div>

							<button
								type="submit"
								className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
							>
								Save Changes
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditProduct;
