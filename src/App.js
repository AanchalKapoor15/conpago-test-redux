import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


import rootReducer from './reducers'
import PeopleContainer from './containers/peopleContainer'

function App() {

    const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

    return (
        <Provider store={store} >
            <PeopleContainer />
        </Provider >
    )
}

export default App 
