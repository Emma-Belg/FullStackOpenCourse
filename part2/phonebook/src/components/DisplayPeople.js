const DisplayPeople = ({ people, showFiltered, newSearch, deletePerson }) => {

  return (
    <div>
      {
        newSearch === '' ?
          <ul>
            {people.map((person) => {
              return (
                <li
                  key={person.id}>{person.name}: {person.number} 
                  &nbsp;
                  <button type="click" 
                  onClick={() => {
                    if(window.confirm(`Are you sure you want to delete ${person.name}?`)) {
                      deletePerson(person.id)
                    }
                    }}>delete</button>
                </li>)
            })}
          </ul>
          :
          <ul>
            {showFiltered.map((person) => {
              return (
              <li 
              key={person.name}>{person.name}: {person.number}
              </li>)
            })}
          </ul>
      }
    </div>
  )
}

export default DisplayPeople