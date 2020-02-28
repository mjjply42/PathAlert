/*global chrome*/
import React, { useState, useEffect } from 'react';
import { MainComponent } from './components/logic/mainComponent.js';
import './App.css';

function App() {

  const [urls, updateUrls] = useState();

  useEffect(() => {
    chrome.runtime.sendMessage({ action: "GATHER_STORAGE"});
    let sitesInfo = localStorage.getItem('URL_Detection_info');
    updateUrls(JSON.parse(sitesInfo));
    chrome.runtime.onMessage.addListener( function(message){
      console.log("APP MESSAGE: ", message);
    });
  },[])

  const siteUpdate = (id, key, value) => {
      const newState = JSON.parse(JSON.stringify(urls));
      newState.map((site, index) => {
        if (site.id === id)
          site[key] = value;
      });
      updateStorage('URL_Detection_info', newState);
  }

  const removeItem = (id) => {
    let newState = urls.filter((item, index) => {
      if (item.id !== id)
        return (item);
    });
    updateStorage('URL_Detection_info', newState);
  }

  const addItem = () => {
    let newState = JSON.parse(JSON.stringify(urls));
    let lastId = urls[urls.length - 1].id;
    newState.push({id: (lastId + 1), path: "", message: "", 
    color: '#fff', domain: false});
    updateStorage('URL_Detection_info', newState);
  }

  const updateStorage = (key, value) => {
   
    updateUrls(value);
    chrome.runtime.sendMessage({ action: "UPDATE_STORAGE", key: JSON.stringify(value)});
    //localStorage.setItem(key, (JSON.stringify(value)));
  }

  return (
    <div className="App">
      <header className="App-header">
        <MainComponent urls={ urls } updateSiteItem={ siteUpdate } 
              removeItem={ removeItem } addItem={ addItem }/>
      </header>
    </div>
  );
}

export default App;
