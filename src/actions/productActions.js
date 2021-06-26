import { ADD_PRODUCT, ADD_PRODUCT_SUCCESSFUL, ADD_PRODUCT_ERROR } from '../types';

// Create new products.
export function createNewProductActions(product) {
	return (dispatch) => {
		dispatch(addProduct());

		try {
			dispatch(addProductOk(product));
		} catch (error) {
			dispatch(addProductError(true));
		}
	};
}

const addProduct = () => ({
	type: ADD_PRODUCT,
	payload: true
});

// If product has been saved in DB.
const addProductOk = (product) => ({
	type: ADD_PRODUCT_SUCCESSFUL,
	payload: product
});

// Else...
const addProductError = (status) => ({
	type: ADD_PRODUCT_ERROR,
	payload: status
});
