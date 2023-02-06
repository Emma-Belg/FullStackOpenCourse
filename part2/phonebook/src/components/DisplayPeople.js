const DisplayPeople = ({people, showFiltered, newSearch}) => {
    
    return (
        <div>
        {
          newSearch === '' ?
            <ul>
              {people.map((person) => {
                return (<li key={person.name}>{person.name}: {person.number}</li>)
              })}
            </ul>
            :
            <ul>
              {showFiltered.map((person) => {
                return (<li key={person.name}>{person.name}: {person.number}</li>)
              })}
            </ul>
        }
      </div>
    )
}

export default DisplayPeople