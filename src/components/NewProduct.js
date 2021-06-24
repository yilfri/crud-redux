import React from 'react';

// Redux actions.
import { createNewProductActions } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const NewProduct = () => {
	// Use dispatch create function
	const dispatch = useDispatch();

	// Call action from productAction.
	const addProduct = () => dispatch(createNewProductActions());

	// When user submi form.
	const handleSubmitNewProduct = (e) => {
		e.preventDefault();

		// Validate form.
		// Check errors.

		//Create new product.
		addProduct();
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
								/>
							</div>

							<div className="form-group">
								<label>Product Price</label>
								<input
									type="number"
									placeholder="Product Price"
									className="form-control"
									name="price"
								/>
							</div>

							<button
								type="submit"
								className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
							>
								Add
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewProduct;
