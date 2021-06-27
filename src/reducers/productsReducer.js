import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESSFUL,
	ADD_PRODUCT_ERROR,
	GET_PRODUCTS,
	GET_PRODUCTS_SUCCESSFUL,
	GET_PRODUCTS_ERROR,
	DELETE_PRODUCT,
	DELETE_PRODUCT_SUCCESSFUL,
	DELETE_PRODUCT_ERROR,
	GET_UPDATE_PRODUCT
} from '../types';

// Each reducer has it own state
const initialState = {
	products: [],
	error: null,
	loading: false,
	productDelete: null,
	productEdit: null
};

// eslint-disable-next-line
export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_PRODUCT:
		case GET_PRODUCTS:
			return {
				...state,
				loading: action.payload
			};
		case ADD_PRODUCT_SUCCESSFUL:
			return {
				...state,
				loading: false,
				products: [...state.products, action.payload]
			};
		case ADD_PRODUCT_ERROR:
		case GET_PRODUCTS_ERROR:
		case DELETE_PRODUCT_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		case GET_PRODUCTS_SUCCESSFUL:
			return {
				...state,
				loading: false,
				error: null,
				products: action.payload
			};
		case DELETE_PRODUCT:
			return {
				...state,
				productDelete: action.payload
			};
		case DELETE_PRODUCT_SUCCESSFUL:
			return {
				...state,
				products: state.products.filter((product) => product.id !== state.productDelete),
				productDelete: null
			};
		case GET_UPDATE_PRODUCT:
			return {
				...state,
				productEdit: action.payload
			};
		default:
			return state;
	}
}
