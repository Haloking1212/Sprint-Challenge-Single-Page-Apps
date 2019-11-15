import React from "react";
import { Route } from "react-router-dom";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";


export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <Route path="/" component={CharacterList}  />
    </main>
  );
}
