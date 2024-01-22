/* eslint-disable react/no-unescaped-entities */
import { BiSolidCategory } from "react-icons/bi";
import { createQueryObject } from "../helpers/helper";
import PropTypes from "prop-types";
import categories from "../constants/CategoryList";
import SearchBox from "../components/SearchBox";

const SideBar = ({ setQuery, query, search, setSearch }) => {
  SideBar.propTypes = {
    setQuery: PropTypes.func,
    query: PropTypes.object,
    search: PropTypes.string,
    setSearch: PropTypes.func,
  };

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLocaleLowerCase();
    if (tagName === "LI" || tagName === "OPTION") {
      setQuery((query) => createQueryObject(query, { category }));
    } else return;
  };
  return (
    <div>
      <div className="p-2 mb-4 bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
        <SearchBox setQuery={setQuery} search={search} setSearch={setSearch} />
      </div>
      <div className="hidden lg:block p-2 bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
        <div className="flex sign border-b-2 border-dashed mb-2 pb-2">
          <BiSolidCategory />
          <p>Categories</p>
        </div>
        <div>
          <ul className="cursor-pointer" onClick={(e) => categoryHandler(e)}>
            {categories.map((item) => (
              <li
                className={
                  query.category === item.type.toLocaleLowerCase()
                    ? "selected-text"
                    : "hover-text"
                }
                key={item.id}
              >
                {item.type}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <select
        className="w-full lg:hidden p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-gray-800"
        onClick={(e) => categoryHandler(e)}
      >
        <option>All</option>
        <option>electronics</option>
        <option>jewelery</option>
        <option>men's clothing</option>
      </select>
    </div>
  );
};

export default SideBar;
