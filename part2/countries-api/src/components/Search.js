const Search = ({searchValue, handleSearchChange}) => {

    return (
        <div>
            Search countries: <input 
                value={searchValue}
                onChange={handleSearchChange}
            />
        </div>
    )
}

export default Search