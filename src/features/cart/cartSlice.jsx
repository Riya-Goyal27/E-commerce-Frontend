import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalItems: 0,
    maxQuantityAllowed: 3,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCartItems: (state, {payload}) => {
            const {image, color, title, price} = payload;
            const existingItem = state.cartItems.find(item => (item.image == image && item.color == color && item.title == title && item.price == price))
            if(existingItem){
                existingItem.quantity += payload.quantity;
                if(existingItem.quantity > state.maxQuantityAllowed)
                existingItem.quantity = state.maxQuantityAllowed;
            }else{
                state.cartItems.push(payload);
            }
        },
        updateTotalItems: (state) => {
            state.totalItems = state.cartItems.reduce(((total, item) => total + item.quantity), 0)
        },
        increaseItemQuantity: (state, {payload}) => {
            const {image, color, title, price} = payload;
            const item = state.cartItems.find(item => (item.image == image && item.color == color && item.title == title && item.price == price))
            item.quantity += 1;
            if(item.quantity > state.maxQuantityAllowed)
            item.quantity = state.maxQuantityAllowed;
        },
        decreaseItemQuantity: (state, {payload}) => {
            const {image, color, title, price} = payload;
            const item = state.cartItems.find(item => (item.image == image && item.color == color && item.title == title && item.price == price))
            item.quantity -= 1;
            if(item.quantity == 0){
                state.cartItems = state.cartItems.filter(item => (item.image != image || item.color != color || item.title != title || item.price != price))
            }
        },
        deleteCartItem: (state, {payload}) => {
            const {image, color, title, price} = payload;
            state.cartItems = state.cartItems.filter(item => (item.image != image || item.color != color || item.title != title || item.price != price))
        },
        clearCartItems: (state) => {
            state.cartItems = [];
        }

    }
});

export const {addToCartItems, updateTotalItems, increaseItemQuantity, decreaseItemQuantity, deleteCartItem, clearCartItems} = cartSlice.actions

export default cartSlice.reducer