import React, { useState, useEffect } from 'react';
import { MainComponent } from './components/logic/mainComponent.js';
import './App.css';

const testURLS = [
  {id: 0, path: "http://www.test.com", message: "This is a test message", 
      color: '#fff', domain: false},

  {id: 1, path: "http://www.test1.com", message: "This is a test1 message", 
      color: '#ff0', domain: false},
]

function App() {

  const [urls, updateUrls] = useState();

  useEffect(() => {
    //grab state from local storage and update here
    updateUrls(testURLS)
  },[])

  useEffect(() => {
    //grab state from local storage and update here
      console.log("UPDATED: ", urls)
  },[urls])

  const siteUpdate = (id, key, value) => {
    console.log(id, key, value);
      const newURLState = JSON.parse(JSON.stringify(urls));
      newURLState.map((site, index) => {
        if (site.id === id)
          site[key] = value;
      })
      updateUrls(newURLState);
      //save new state to localStorage
  }

  return (
    <div className="App">
      <header className="App-header">
        <MainComponent urls={urls} updateSiteItem={siteUpdate}/>
      </header>
    </div>
  );
}

export default App;
