import { ActionTypes } from '../constants/action-types'


const intialState = {
    products: [],
};

export const productReducer = (state = intialState, { type, playload }) => {
    // eslint-disable-next-line default-case
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: playload
            }
        default:
            return state;
    }

}
export const selectesProductReducer = (state = {}, { type, playload }) => {
    switch (type) {
        case ActionTypes.SELECT_PRODUCTS:
            return {
                ...state,
                ...playload
            }
        // eslint-disable-next-line no-duplicate-case
        case ActionTypes.SELECT_PRODUCTS:
            return {}
        default:
            return state;
    }

}