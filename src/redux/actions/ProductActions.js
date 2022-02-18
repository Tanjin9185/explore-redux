import { ActionTypes } from '../constants/action-types'

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        playload: products
    }
}
export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELECT_PRODUCTS,
        playload: product
    }
}
export const removeSelectedProducts = (products) => {
    return {
        type: ActionTypes.REMOVE_SELECT_PRODUCTS,
    }
}