const Search_bar = function(handleSearchText, searchText) {
    return (
        <>
            <div className="search">
                <label className="search_name"><b>Search:</b></label>
                <input className="input_box"
                    type="text"
                    id="search"
                // value={year}
                // onChange={(e) => setYear(e.target.value)}
                />
            </div>
        </>
    );
};
export default Search_bar;