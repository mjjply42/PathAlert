import React from 'react';
import PropTypes from 'prop-types';

export const Path = (props) => {
    return (
        <div style={styles.pathContainer}>
            <p style={styles.fullPath}>Url:</p>
            <span onInput={(e)=>{props.pathChange(e.currentTarget.textContent)}} contentEditable="true" style={styles.pathName}>{props.path}</span>
        </div>
    )
}

const styles = {
    fullPath: {
        fontSize: '17px',
        marginLeft: '-5px',
    },
    pathName: {
        fontSize: '17px',
        marginLeft: '36px',
        width: '200px',
        textAlign: 'left',
        wordWrap: 'break-word',
    },
    pathContainer: {
        marginLeft: '-5px',
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
}

Path.propTypes = {
};