import "./TodoSearch.css"
import searchIcon from "../../assets/search-icon.svg";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";


function TodoSearch () { 

  const {searchValue, setSearchValue} = useContext(TodoContext)

  return (
    <div className="search-container">
      <input 
        placeholder="Buscador..."
        onChange={(e)=> {
          setSearchValue(e.target.value)
        }}
        value={searchValue}
        />
      <img className="search-icon" src={searchIcon} alt="search icon" />
    </div>
    );
  }

export {TodoSearch}