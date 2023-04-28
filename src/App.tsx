import { useState, useEffect, ChangeEvent } from "react";
import "./App.scss";
import { render } from "react-dom";
import SearchBox from "./components/SearchBox";
import MonstersCard from "./components/MonstersCard";
import { getData } from "./utils/getData";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

function App() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((users) => {
    //     setMonsters(users);
    //   });
    const fetchData = async () => {
      const user = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(user);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
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
