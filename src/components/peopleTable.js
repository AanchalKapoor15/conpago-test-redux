import React from 'react'

function PeopleTable(props) {
    const { people, nextUrl, getPeople } = props

    function renderRow(person, index) {
        return (
            <tr key={index}>
                <td>{person.name}</td>
                <td>{person.gender}</td>
                <td>{person.birth_year}</td>
            </tr>
        )
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Birth Year</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        people?.map(renderRow)
                    }
                </tbody>
            </table>
            <input
                type="button"
                value="Next"
                disabled={!nextUrl}
                onClick={() => { getPeople(nextUrl) }} />
        </div>
    )
}

export default PeopleTable 
