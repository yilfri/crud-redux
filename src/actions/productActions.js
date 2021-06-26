import { ADD_PRODUCT, ADD_PRODUCT_SUCCESSFUL, ADD_PRODUCT_ERROR } from '../types';
import clientAxios from '../config/axios';
import Swal from 'sweetalert2';

// Create new products.
export function createNewProductActions(product) {
	return async (dispatch) => {
		dispatch(addProduct());

		try {
			// Add in API
			await clientAxios.post('/products', product);

			// If all ok, update state.
			dispatch(addProductOk(product));

			//Alert.
			Swal.fire('¡Good!', 'Product added successful.', 'success');
		} catch (error) {
			// If have error, change status.
			dispatch(addProductError(true));

			//Alert.
			Swal.fire('¡Oh!', 'Something is wrong.', 'error');
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
