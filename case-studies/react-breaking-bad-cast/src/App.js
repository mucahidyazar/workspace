import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Ui/Header";
import Search from "./components/Ui/Search";
import Characters from "./components/Characters";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search query={query} setQuery={setQuery} />
      <Characters isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
