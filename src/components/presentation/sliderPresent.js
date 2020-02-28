import React from 'react';
import PropTypes from 'prop-types';
import { HuePicker } from 'react-color';

export const Slider = (props) => {
    return (
        <div style={styles.sliderContainer}>
            <HuePicker
                color={props.background}
                onChangeComplete={props.colorChange}
            />
        </div>
    )
}

const styles = {
    sliderContainer: {
    }
}

Slider.propTypes = {
};