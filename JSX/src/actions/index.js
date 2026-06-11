import shop from '../api/shop';
import * as types from '../constants/ActionTypes';

// Action nhận danh sách sản phẩm
const receiveProducts = (products) => ({
    type: types.RECEIVE_PRODUCTS,
    products,
});

// Thunk lấy danh sách sản phẩm
export const getAllProducts = () => (dispatch) => {
    shop.getProducts((products) => {
        dispatch(receiveProducts(products));
    });
};

// Action thêm sản phẩm vào giỏ hàng (bất đồng bộ)
const addToCartUnsafe = (productId) => ({
    type: types.ADD_TO_CART,
    productId,
});

// Thunk kiểm tra tồn kho trước khi thêm
export const addToCart = (productId) => (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
        dispatch(addToCartUnsafe(productId));
    }
};

// Thunk thanh toán
export const checkout = (products) => (dispatch, getState) => {
    dispatch({ type: types.CHECKOUT_REQUEST });
    shop.buyProducts(products, () => {
        dispatch({ type: types.CHECKOUT_SUCCESS });
    });
};