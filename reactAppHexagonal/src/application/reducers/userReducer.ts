import { ActionTypes } from "../../domain/use-cases/types"

// @ts-ignore
const initialState = {
    reservations: [],
    rooms: [],
}

export const userReducer = (state = initialState, action: { type: any, payload?: any }) => {
    const {GET_RESERVATIONS_SUCCESS,GET_ROOMS_SUCCESS} = ActionTypes

    switch (action.type) {
        case GET_RESERVATIONS_SUCCESS:
            return {
                ...state,
                reservations: action.payload
            }
            case GET_ROOMS_SUCCESS:
            return {
                ...state,
                rooms: action.payload
            }
        default:
            return state
    }
}

