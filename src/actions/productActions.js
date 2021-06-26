import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESSFUL,
	ADD_PRODUCT_ERROR,
	GET_PRODUCTS,
	GET_PRODUCTS_SUCCESSFUL,
	GET_PRODUCTS_ERROR
} from '../types';
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

// Get productos from DB.
export function getProductsAction() {
	return async (dispatch) => {
		dispatch(getProducts());
		try {
			const response = await clientAxios.get('/products');

			dispatch(getProductsOk(response.data));
		} catch (error) {
			console.log(error);
			dispatch(getProductsError());
		}
	};
}
// Get Products from Db or API.
const getProducts = () => ({
	type: GET_PRODUCTS,
	payload: true
});

const getProductsOk = (products) => ({
	type: GET_PRODUCTS_SUCCESSFUL,
	payload: products
});

const getProductsError = () => ({
	type: GET_PRODUCTS_ERROR,
	payload: true
});
