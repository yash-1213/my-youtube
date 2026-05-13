import { useEffect, useState } from "react";
import { SEARCH_ICON, YOUTUBE_SEARCH_BY_KEYWORD, YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import useSearchVideo from "../hooks/useSearchVideo";

const Search = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // debouncing to apply api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    // clears the timer when component destroys (this only calls when the component destroys i.e at the time of re-render)
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(`${YOUTUBE_SEARCH_SUGGESTION_API}${searchQuery}`);
    const json = await data.json();
    setSuggestions(json?.[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json?.[1],
      }),
    );
  };

  const handleSearch = async () => {
    console.log("searched query :", searchQuery);
    const data = await fetch(`${YOUTUBE_SEARCH_BY_KEYWORD}${searchQuery}`);
    const json = await data.json();
    console.log("json searchde voidep :", json);
  };

  return (
    <div>
      <div className="flex items-center">
        <input className="w-full border border-gray-300 py-2 px-4 rounded-l-full" type="text" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} />
        <button className="border border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200" onClick={handleSearch}>
          <img className="h-10 px-2" alt="search-icon" src={SEARCH_ICON} />
        </button>
      </div>
      {showSuggestions && suggestions.length !== 0 && (
        <div className="absolute bg-white py-2 px-3 w-[34rem] shadow-lg rounded-md my-2 border border-gray-100">
          <ul className="w-full max-h-[300px] overflow-auto">
            {suggestions?.map((s) => (
              <li key={s} className="hover:bg-gray-200 text-start rounded-md p-2 cursor-default">
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
