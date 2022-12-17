import { GETALL_CATEGORY, CREATE_CATEGORY, DELETE_CATEGORY, SEARCH_CATEGORY, UPDATE_CATEGORY } from "../actions/categoryAction";

const initialState = {
    categories: [],
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALL_CATEGORY:
            return {
                ...state,
                categories: [...action.payload]
            }
        case SEARCH_CATEGORY:
            return {
                ...state,
                categories: [...action.payload],

            };
        case CREATE_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                categories: state.categories.map((x) => {
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
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(x => x.docId !== action.payload.docId),
            }
        default:
            return { ...state };
    }
}