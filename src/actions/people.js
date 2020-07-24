import { Constants } from '../constants/constants'

export const getPeople = (url) => async dispatch => {
    await dispatch({ type: Constants.FETCH_PEOPLE_REQUEST })

    try {
        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                dispatch(
                    {
                        type: Constants.FETCH_NEXT_URL,
                        nextUrl: responseJson.next
                    })
                return responseJson.results
            })
            .then(people => {
                dispatch({
                    type: Constants.FETCH_PEOPLE_SUCCESS,
                    data: people
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    catch (error) {
        return dispatch({
            type: Constants.FETCH_PEOPLE_ERROR,
            error
        })
    }
}

export default getPeople