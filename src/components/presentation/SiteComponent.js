import React from 'react';
import PropTypes from 'prop-types';

export const Site = (props) => {
    return (
        <div style={styles.siteContainer}>
            <a  target="_blank" rel="noopener noreferrer" href={props.path} 
                title={"This is the full URL pathname"} style={styles.urlName}>{props.path}</a>
        </div>
    )
}

const styles = {
    urlName: {
        fontSize: '17px',
        marginLeft: '20px',
        color: 'white',
        textDecoration: 'none',
    },
    siteContainer: {
        maxWidth: '170px',
    }
}

Site.propTypes = {
};