import {
    Constants
} from '../constants/constants'

const people = (state = [], action) => {
    switch (action.type) {
        case Constants.FETCH_PEOPLE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case Constants.FETCH_PEOPLE_SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoading: false
            }
        case Constants.FETCH_NEXT_URL:
            return {
                ...state,
                nextUrl: action.nextUrl
            }
        case Constants.FETCH_PEOPLE_ERROR:
            return {
                err: action.err,
                isLoading: false
            }
        default:
            return {
                state
            }
    }
}

export default people