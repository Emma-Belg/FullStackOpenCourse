const Search = ({ newSearch, handleSearchChange }) => {
    return (
        <div>
            Filter shown with: <input
                value={newSearch}
                onChange={handleSearchChange} />
        </div>
    )
}

export default Search