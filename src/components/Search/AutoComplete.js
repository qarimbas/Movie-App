import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchSelector } from "../../shared/store/selectors/search.selectors";
import { searchActions } from "../../shared/store/actions/search.actions";
import { useRouteMatch } from "react-router-dom";

export const AutocompletePage = () => {
  let matchSearch = useRouteMatch();
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const searchData = useSelector(getSearchSelector);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (value !== "") {
        console.log("final search term is: ", value);
        loadSearch(value);
      }
    }, 3000);
    return () => clearTimeout(timeOutId);
  }, [value, matchSearch.params.id]);

  const loadSearch = (searchTerm) => {
    dispatch(searchActions.loadSearchAction(searchTerm, matchSearch.params.id));
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (searchData !== "" && searchData.length !== 0) {
      }
    }, 5000);
    return () => clearTimeout(timeOutId);
  }, [searchData, matchSearch.params.id]);

  return (
    <div className="m-8">
      <Autocomplete
        value={value}
        setValue={setValue}
        name="search"
        placeholder="Search Movies"
        suggestions={searchData}
      />
    </div>
  );
};

/* Logic */

const style = {
  label: `text-gray-600`,
  disabled: `cursor-not-allowed`,
  container: `relative mb-6 mt-3`,
  default: `rounded-lg w-full flex-1 mt-1 py-1.5 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent border border-gray-300 border-transparent`,
  suggestion: {
    activeItem: "bg-gray-300",
    item: `px-2 py-3 focus text-sm cursor-pointer hover:bg-gray-500 text-blue-300 bg-gray-600`,
    list: `shadow-xl absolute top-full left-0 right-0 border w-auto md:max-w-xs overflow-y-auto max-h-80 mt-2 bg-gray-600 p-3 z-20`,
  },
};

function Autocomplete({ name, label, suggestions, value, setValue, ...rest }) {
  const ref = React.useRef(null);
  const [activeSuggestion, setActiveSuggestion] = React.useState(0);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);

  //close suggestions list when click outside
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!showSuggestions) return;
        setShowSuggestions(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [showSuggestions, ref]);

  const handleChange = React.useCallback(
    (e) => {
      let filteredSuggestions = [];
      const userInput = e.currentTarget.value;
      if (suggestions.length) {
        filteredSuggestions = suggestions.filter((suggestion) => {
          console.log(suggestion);
          return (
            suggestion.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1
          );
        });
      }
      setActiveSuggestion(0);
      setFilteredSuggestions(filteredSuggestions);
      setShowSuggestions(true);
      setValue(e.currentTarget.value);
    },
    [setValue, suggestions]
  );

  const onClick = (e) => {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setValue(e.currentTarget.innerText);
  };

  const onKeyDown = (e) => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setValue(filteredSuggestions[activeSuggestion]);
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  let suggestionsListComponent;

  if (showSuggestions && value) {
    if (suggestions.length !== 0) {
      suggestionsListComponent = (
        <ul className={style.suggestion.list}>
          {suggestions.map((suggestion, index) => {
            let className;

            if (index === activeSuggestion) {
              className = `${style.suggestion.item} ${style.suggestion.activeItem}`;
            }

            if (index !== activeSuggestion) {
              className = style.suggestion.item;
            }
            return (
              <div
                key={suggestion.id}
                onClick={(event) =>
                  (window.location.href = `/moviedetails/${suggestion.id}`)
                }
                className="group"
              >
                <li className={className} key={suggestion} onClick={onClick}>
                  <div className={"flex justify-evenly flex-row"}>
                    <img
                      className="flex h-24 w-24 mx-2"
                      src={suggestion.image}
                    />
                    <h2 className={"flex text-base font-bold my-4 mx-2"}>
                      {suggestion.title}
                    </h2>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      );
    }
  }

  return (
    <div className={style.container}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input
        autoComplete="off"
        className={style.default}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        value={value}
        {...rest}
      />
      {suggestionsListComponent}
    </div>
  );
}
