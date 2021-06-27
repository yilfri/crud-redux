import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const EditProduct = () => {
	// Producto to edit.
	const product = useSelector((state) => state.products.productEdit);

	if (!product) return null;

	const { name, price, id } = product;

	return (
		<div className="row justify-content-center mt-5">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">Edit Product</h2>

						<form>
							<div className="form-group">
								<label>Product Name</label>
								<input
									type="text"
									placeholder="Product Name"
									className="form-control"
									name="name"
									value={name}
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
