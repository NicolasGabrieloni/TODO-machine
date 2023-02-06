import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';
import { BiSearch } from "react-icons/bi";

function TodoSearch () {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchvalueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <div className="inputbloq">
        <BiSearch />
        <input
        className="search" 
        placeholder="search" 
        value={searchValue}
        onChange={onSearchvalueChange}
        />
        </div>
    );
};

export { TodoSearch }