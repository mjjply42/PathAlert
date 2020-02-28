import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AvailableItems = (props) => {
    const [urls, updateURLS] = useState()
    const { selected } = props;

    useEffect(()=> {
        if (props.urls)
            updateURLS(props.urls);
    },[props.urls])
    return (
        <>
        <div style={styles.availableContainer}>
            {(urls ? urls.map((site, index) => {
                return (
                    <div key={index} style={{
                                        backgroundColor: (index % 2 === 0 ? 'orange':'red'),
                                        width: ((selected && selected.id === index) ? ('90%'):'80%'),
                                        height: '20%',
                                        display: 'flex',
                                        flexDirection: 'row',}} 
                            onClick={() => {props.sendSelected(site.id)}}>
                        <p>{site.id}</p>
                        <p>{site.path}</p>
                    </div>
                )
            }):undefined)}
        </div>
        </>
    )
}

const styles = {
    availableContainer: {
        width: '400px',
        maxHeight: '400px',
        overflowY: 'scroll',
        overflowX: 'hidden',
    },
    availableItem: {
    }
}

AvailableItems.propTypes = {
};