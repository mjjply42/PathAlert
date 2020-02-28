import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SelectedComponent } from './selectComponent.js';
import { AvailableItems } from './availableComponent.js';

export const MainComponent = (props) => {

    const [selected, updateSelected] = useState(null);
    const [urls, updateURLS ] = useState();

    useEffect(() => {
        if (props.urls)
            updateURLS(props.urls);
        console.log("MAIN TRIGGER: ", props.urls)
    },[props.urls])

    const selectorUpdate = (id) => {
        urls.map((site, index) => {
            if (id === site.id)
                updateSelected(site);
        })
    }

    const selectedUpdate = (key, value) => {
        const newURLState = JSON.parse(JSON.stringify(selected));
        newURLState[key] = value;
        updateSelected(newURLState);
        props.updateSiteItem(selected.id, key, value);
        //save new state to localStorage
    }

    return (
        <>
            {urls ? <div style={styles.appContainer}>
                {!selected ? <h1>Select a URL</h1>:undefined}
                {selected ? <SelectedComponent site={ selected } updateStat={selectedUpdate} 
                                            updateKey={props.updateSiteItem}/>:undefined}
                <AvailableItems selected={selected} urls={urls} sendSelected={selectorUpdate}/>
            </div>:undefined}
        </>
    )
}

const styles = {
    appContainer: {
        width: '400px',
    }
}

MainComponent.propTypes = {
};