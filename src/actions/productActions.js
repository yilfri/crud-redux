import { ADD_PRODUCT, ADD_PRODUCT_SUCCESSFUL, ADD_PRODUCT_ERROR } from '../types';
import clientAxios from '../config/axios';

// Create new products.
export function createNewProductActions(product) {
	return async (dispatch) => {
		dispatch(addProduct());

		try {
			// Add in API
			await clientAxios.post('/products', product);

			// If all ok, update state.
			dispatch(addProductOk(product));
		} catch (error) {
			// If have error, change status.
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
const addProductError = (state) => ({
	type: ADD_PRODUCT_ERROR,
	payload: state
});
