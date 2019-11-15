import React from "react";
import { Route } from "react-router-dom";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route path="/characters" render={ () => <CharacterList/>}  />
      <Route path="/search" render={ () => <SearchForm/>}  />
    </main>
  );
}
