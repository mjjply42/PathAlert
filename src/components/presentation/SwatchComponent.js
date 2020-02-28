import React from 'react';
import PropTypes from 'prop-types';

export const Swatch = (props) => {
    const styles = {
        swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            cursor: 'pointer',
            height: '20px',
            width: '40px',
            marginRight: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        colorSwatch: {
            width: '100px',
            height: '90%',
            backgroundColor: `${props.background}`,
        },
    }

    return (
        <div style={styles.swatch} onClick={props.swatchChange}>
            <div style={styles.colorSwatch}></div>
        </div>
    )
}

Swatch.propTypes = {
};