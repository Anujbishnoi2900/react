const Search = ({ setSearch }) => {
  return (
    <div className="text-center my-4">
      <input
        type="search"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded-lg w-full md:w-1/3"
      />
    </div>
  );
};

export default Search;
