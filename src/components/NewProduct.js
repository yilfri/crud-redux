import React, { useState } from 'react';

// Redux actions.
import { createNewProductActions } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const NewProduct = () => {
	// State.
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);

	// Use dispatch create function
	const dispatch = useDispatch();

	// Access to state of store.
	const loading = useSelector((state) => state.products.loading);
	const error = useSelector((state) => state.products.error);

	// Call action from productAction.
	const addProduct = (product) => dispatch(createNewProductActions(product));

	// When user submi form.
	const handleSubmitNewProduct = (e) => {
		e.preventDefault();

		// Validate form.
		if (name.trim() === '' || price <= 0) {
			return;
		}
		// Check errors.

		//Create new product.
		addProduct({
			name,
			price
		});
	};
	return (
		<div className="row justify-content-center mt-5">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">Add New Product</h2>

						<form onSubmit={handleSubmitNewProduct}>
							<div className="form-group">
								<label>Product Name</label>
								<input
									type="text"
									placeholder="Product Name"
									className="form-control"
									name="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
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
									onChange={(e) => setPrice(Number(e.target.value))}
								/>
							</div>

							<button
								type="submit"
								className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
							>
								Add
							</button>
						</form>
						{loading ? <p>Loading...</p> : null}
						{error ? (
							<p className="alert alert-danger p-2 mt-4 text-center">¡Ups! Something is wrong</p>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewProduct;
