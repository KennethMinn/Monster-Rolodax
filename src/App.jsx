import { useState, useEffect } from "react";
import "./App.scss";
import { render } from "react-dom";
import SearchBox from "./components/SearchBox";
import MonstersCard from "./components/MonstersCard";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const onSearchChange = (e) => {
    setSearchField(e.target.value.toLowerCase());
  };

  return (
    <div className="App container">
      <h1 className="app-title display-1 mt-5 mb-5">MONSTERS ROLODAX</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <MonstersCard filteredMonsters={filteredMonsters} />
    </div>
  );
}

export default App;
