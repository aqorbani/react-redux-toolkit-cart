import { FaMagnifyingGlass } from "react-icons/fa6";
import { createQueryObject } from "../helpers/helper";
import PropTypes from "prop-types";

const SearchBox = ({ setQuery, setSearch, search }) => {
  SearchBox.propTypes = {
    setQuery: PropTypes.func,
    setSearch: PropTypes.func,
    search: PropTypes.string,
  };
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <div className="flex justify-between">
      <input
        type="text"
        className="form-input mr-1 rounded w-3/4 border-none"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
      />
      <button className="btn" onClick={searchHandler}>
        <FaMagnifyingGlass />
      </button>
    </div>
  );
};

export default SearchBox;
