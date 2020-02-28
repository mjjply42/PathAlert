import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Slider } from '../presentation/sliderPresent.js';
import { Path } from '../presentation/pathComponent.js';
import { Message } from '../presentation/messageComponent.js';
import { Swatch } from '../presentation/SwatchComponent.js';
import { Site } from '../presentation/SiteComponent.js';
import { DomainCheckBox } from '../presentation/CheckComponent.js';

export const SelectedComponent = (props) => {

    const [shortURL, updateShortUrl] = useState()
    const [visible, updateSliderVisibility] = useState(false);
    const { site } = props;

    useEffect(() => {
        shortenUrl(site.path);
    },[]);

    const handleSliderMove = (color) => {
        props.updateKey(site.id, 'color', color.hex);
        props.updateStat('color', color.hex);
    }

    const handlePath = (path) => {
        props.updateStat('path', path);
    }

    const handleMessage = (message) => {
        props.updateStat('message', message);
    }
    
    const checkHandler = (value) => {
        props.updateStat('domain', value);
    }

    const swatchChange = () => {
        updateSliderVisibility(!visible);
    }

    const shortenUrl = (path) => {
        let newPath = []
        let periods = false
        let splitPath = path.split('');
        
        if (splitPath.length > 15)
            periods = true;
        splitPath.map((item, index) => {
            if (index < 15)
                newPath.push(item);
        })
        if (periods)
            newPath.push('...');
        updateShortUrl(newPath.join(''));
    }

    const styles = {
        mainContainer: {
            display: 'flex',
            height: '30px',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginLeft: '10px',
        },
        sliderContainer: {
            marginTop: '20px',
            marginLeft: '20px',
            width: '200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
    }

    return (
        <>
        <div style={styles.mainContainer}>
            <Swatch background={site.color} swatchChange={swatchChange}/>
            <Site path={shortURL}/>
            <DomainCheckBox domain={site.domain} checkUpdate={checkHandler}/>
        </div>
        {visible ? <div style={styles.sliderContainer}>
            <>
                <Slider background={site.color} colorChange={(color) => {handleSliderMove(color)}}/>
                <Path path={site.path} pathChange={(path) => {handlePath(path)}}/>
                <Message message={site.message} messageChange={(message) => {handleMessage(message)}}/>
                <button onClick={()=>{props.removeItem(site.id)}}>REMOVE</button>
            </>
                </div>: undefined}
        <hr></hr>
        </>
    )
}

SelectedComponent.propTypes = {
};