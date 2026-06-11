import { combineReducers } from 'redux';
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes';

const byId = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                    obj[product.id] = product;
                    return obj;
                }, {}),
            };
        case ADD_TO_CART:
            const product = state[action.productId];
            return {
                ...state,
                [action.productId]: {
                    ...product,
                    inventory: product.inventory - 1,
                },
            };
        default:
            return state;
    }
};

const visibleIds = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products.map((p) => p.id);
        default:
            return state;
    }
};

export default combineReducers({ byId, visibleIds });

// Selector lấy 1 sản phẩm theo id
export const getProduct = (state, id) => state.byId[id];

// Selector lấy danh sách sản phẩm hiện thị
export const getVisibleProducts = (state) =>
    state.visibleIds.map((id) => getProduct(state, id));