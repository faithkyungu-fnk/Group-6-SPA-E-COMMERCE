
function SearchBar({searchTerm, onSearchChange}) {
    return (
        <div className= "search-bar">
            <input
                type="text"
                placeholder= "search for a coffee..."
                value= {searchTerm}
                onChange= {(e) => onSearchChange(e.target.value)}
                />
                </div>
    );
}

export default SearchBar;