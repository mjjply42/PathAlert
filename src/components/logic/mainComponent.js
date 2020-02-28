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
    },[props.urls])

    const selectorUpdate = (id) => {
        console.log("ID: ", id)
        urls.map((site, index) => {
            if (id === site.id)
                updateSelected(site);
        });
    }

    const selectedUpdate = (key, value) => {
        const newURLState = JSON.parse(JSON.stringify(selected));
        newURLState[key] = value;
        updateSelected(newURLState);
        props.updateSiteItem(selected.id, key, value);
    }

    const updateRemoval = () => {
        props.removeItem(selected.id);
        updateSelected(false);
    }

    return (
        <>
            <div style={styles.appContainer}>
                {!selected ? <h1>Select a URL</h1>:undefined}
                {selected ? <SelectedComponent site={ selected } updateStat={selectedUpdate} 
                                updateKey={props.updateSiteItem} 
                                removeItem={updateRemoval}/>:undefined}
                <button onClick={()=>{props.addItem()}}>ADD</button>
                <AvailableItems selected={selected} urls={urls} sendSelected={selectorUpdate}/>
            </div>
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