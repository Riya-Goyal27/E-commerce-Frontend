import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";
const prices = data.map(item => item.price)
const maxPrice = Math.max(...prices);

const initialState = {
    searchValue: '',
    categoryIndex: 0,
    companyValue: 'all',
    maxPrice: maxPrice,
    range: maxPrice,
    colorIndex: -1,
    freeShippingChecked: false,
    allColors: true,
    isGrid: true,
    productsData: [...data],
    sortValue: 'price-lowest'
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryIndex: (state, {payload}) => {
            state.categoryIndex = payload
        },
        setSearchValue: (state, {payload}) => {
            state.searchValue = payload
        },
        setCompanyValue: (state, {payload}) => {
            state.companyValue = payload
        },
        setRange: (state, {payload}) => {
            state.range = payload
        },
        setColorIndex: (state, {payload}) => {
            state.colorIndex = payload
        },
        setFreeShippingChecked: (state, {payload}) => {
            state.freeShippingChecked = payload
        },
        setAllColors: (state, {payload}) => {
            state.allColors = payload
        },
        setIsGrid: (state, {payload}) => {
            state.isGrid = payload
        },
        setProductsData: (state, {payload}) => {
            state.productsData = payload;
        },
        setSortValue: (state, {payload}) => {
            state.sortValue = payload
        }
        
    }
});

export const { setCategoryIndex, setSearchValue, setCompanyValue, setRange, setColorIndex, setFreeShippingChecked, setAllColors, setIsGrid, setProductsData, setSortValue } = filterSlice.actions

export default filterSlice.reducer