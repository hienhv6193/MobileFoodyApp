import {GETALL_DISCOUNT,CREATE_DISCOUNT,DELETE_DISCOUNT,UPDATE_DISCOUNT  } from "../actions/DiscountAction";

const initialState = {

    discs: [],
}
export const DiscountReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALL_DISCOUNT:
            return {
                ...state,
                discs: [...action.payload]
            }
        case CREATE_DISCOUNT:
            return {
                ...state,
                discs: [...state.discs, action.payload]
            }
        case UPDATE_DISCOUNT:
            return {
                ...state,
                discs: state.discs.map((x) => {
                    if (x.docId === action.payload.docId) {
                        return {
                            ...x,
                            ...action.payload
                        }
                    } else {
                        return x
                    }
                })
            }
        case DELETE_DISCOUNT:
            return {
                ...state,
                discs: state.discs.filter(x => x.docId !== action.payload.docId),
            }
        default:
            return { ...state }
    }
}