import React from 'react';
import PropTypes from 'prop-types';

export const DomainCheckBox = (props) => {
    return (
        <div style={styles.checkContainer}>
            <label style={{fontSize: '12px'}} class="container">Domain
            <input type="checkbox" onClick={() => {props.checkUpdate(!props.domain)}} checked={props.domain}/>
            <span class="checkmark"></span>
            </label>
        </div>
    )
}

const styles = {
    checkContainer: {
        marginLeft: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'right',
    },
}

DomainCheckBox.propTypes = {
};