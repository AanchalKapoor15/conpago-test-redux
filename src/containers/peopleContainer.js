import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import getPeople from '../actions/people'
import { Constants } from '../constants/constants'
import PeopleTable from '../components/peopleTable'

function PeopleContainer(props) {
    const { people, nextUrl, getPeople, isLoading } = props

    useEffect(() => {
        getPeople(Constants.FETCH_PEOPLE_URL)
    }, [])

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    else {
        return (
            <PeopleTable
                people={people}
                nextUrl={nextUrl}
                getPeople={getPeople} />
        )
    }
}

    const mapStateToProps = state => {
        return ({
            people: state.people.data,
            error: state.people.error,
            nextUrl: state.people.nextUrl,
            isLoading: state.people.isLoading
        })
    }

    const mapDispatchToProps = {
        getPeople
    }

    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(PeopleContainer) 
