
function SearchBar({searchTerm, onSearchChange}) {
    return (
        <form
        className="search-bar"
        onSubmit={(event) => event.preventDefault()}
        >
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search coffee..."
          aria-label="Search coffee"
        />

        <button
          className="button button-dark"
          type="button"
          disabled={!searchTerm.trim()}
        >
          Search
        </button>
      </form>
    );
}

export default SearchBar;

