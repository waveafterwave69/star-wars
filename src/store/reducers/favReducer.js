import { omit } from 'lodash'
const initialState = {}

const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PERSON_TO_FAV':
            return {
                ...state,
                ...action.payload,
            }

        case 'REMOVE_PERSON_TO_FAV':
            return omit(state, [action.payload])

        default:
            return state
    }
}

export default favReducer
