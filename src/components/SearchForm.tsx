"use client"
import React, { CSSProperties, FC, useState } from "react";

interface IPropsSearchForm{
  style?:CSSProperties,
  className?:string

}

const SearchForm:FC<IPropsSearchForm> = ({style, className}) => {
  const [valueSearch, setValueSearch] = useState<string>("")
  return (
    <form className={`relative w-80 bg-green-500 rounded-md ${className}`} style={style}>
      <label htmlFor="search" className="sr-only">
        Search for stuff
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        className="w-full bg-white px-4 py-2 rounded-md focus:outline-none transition-all duration-300 ease-in-out text-black"
        autoFocus
        required
        onChange={(e) => setValueSearch(e.target.value)}
      />
      <button
        type="submit"
        className={`top-0 right-0 h-full w-24 font-bold bg-green-500 rounded-md transition-all duration-300 ease-in-out hover:bg-red-500 ${
          valueSearch ? "absolute" : "hidden"
        }`}
      >
        Go
      </button>
    </form>
  );
};

export default SearchForm;
