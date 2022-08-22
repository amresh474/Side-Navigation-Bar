import { useState } from "react";
// import InputText from "../comman/TextInput";
export default function Search() {
  const [search, setSearch] = useState({
    value: "",
    placeHolder: "Search",
  });
  console.log("search==============>", search);
  return (
    <div className="search">
      <i className="fas fa-search"></i>
      <input
        type="text"
        value={search.value}
        placeholder={search.placeHolder}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
