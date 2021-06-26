import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESSFUL,
	ADD_PRODUCT_ERROR,
	GET_PRODUCTS,
	GET_PRODUCTS_SUCCESSFUL,
	GET_PRODUCTS_ERROR
} from '../types';

// Each reducer has it own state
const initialState = {
	products: [],
	error: null,
	loading: false
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
		default:
			return state;
	}
}
