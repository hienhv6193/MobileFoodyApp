import { GETALL_FOOD, SEARCH_FOOD, ADD_FOOD, EDIT_FOOD, DELETE_FOOD } from "../actions/foodAction";

const initialState = {
    foods: [],
}
export const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALL_FOOD:
            return {
                ...state,
                foods: [...action.payload]
            }
        case SEARCH_FOOD:
            return {
                ...state,
                foods: [...action.payload],

            };
        case ADD_FOOD:
            return {
                ...state,
                foods: [...state.foods, action.payload]
            }
        case EDIT_FOOD:
            return {
                ...state,
                foods: state.foods.map((x) => {
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
        case DELETE_FOOD:
            return {
                ...state,
                foods: state.foods.filter(x => x.docId !== action.payload.docId),
            }
        default:
            return { ...state };
    }
}