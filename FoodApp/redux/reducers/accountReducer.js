import { CREATE_ACCOUNT} from "../actions/accountAction";

const initialState = {

    accs: [],
}
export const AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case CREATE_ACCOUNT:
            return {
                ...state,
                accs: [...state.accs, action.payload]
            }
        default:
            return { ...state }
    }
}