import { ADD_PRODUCT, ADD_PRODUCT_SUCCESSFUL, ADD_PRODUCT_ERROR } from '../types';

// Create new products.
export function createNewProductActions(product) {
	return () => {
		console.log(product);
	};
}
