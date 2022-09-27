import { useState } from "react";
import { useGlobalContext } from "../context/mealsContext";
const Search = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="type favorite meal"
          className="form-input"
        />
        <button type="submit" className="btn">
          search
        </button>
        <button type="button" className="btn btn-hipster">
          suprise me
        </button>
      </form>
    </header>
  );
};
export default Search;
