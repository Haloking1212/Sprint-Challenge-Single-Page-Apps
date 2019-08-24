import React from "react";
import { Route } from 'react-router-dom';
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList.js";
import WelcomePage from "./components/WelcomePage";



export default function App() {
  return (
    <main>

      
      <Header />
      <TabNav />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList}/>
      <Route path='/episodes' component={EpisodeList}/>
      <Route path='/locations' component={LocationsList}/>
      {/* <CharacterList />
      <LocationsList />
      <EpisodeList /> */}
    
    </main>
  );
}