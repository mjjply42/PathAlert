import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Slider } from '../presentation/sliderPresent.js';
import { Path } from '../presentation/pathComponent.js';
import { Message } from '../presentation/messageComponent.js';
import { Swatch } from '../presentation/SwatchComponent.js';
import { Site } from '../presentation/SiteComponent.js';
import { DomainCheckBox } from '../presentation/CheckComponent.js';

export const SelectedComponent = (props) => {

    const [background, updateBackground] = useState()
    const [visible, updateSliderVisibility] = useState(false);
    const { site } = props;

    useEffect(() => {
        updateBackground(site.color);
    },[]);

    const handleSliderMove = (color) => {
        updateBackground(color.hex);
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
            <Site path={site.path}/>
            <DomainCheckBox domain={site.domain} checkUpdate={checkHandler}/>
        </div>
        {visible ? <div style={styles.sliderContainer}>
            <>
                <Slider background={site.color} colorChange={(color) => {handleSliderMove(color)}}/>
                <Path path={site.path} pathChange={(path) => {handlePath(path)}}/>
                <Message message={site.message} messageChange={(message) => {handleMessage(message)}}/>
            </>
                </div>: undefined}
        <hr></hr>
        </>
    )
}

SelectedComponent.propTypes = {
};