import React from 'react';
import PropTypes from 'prop-types';

export const Message = (props) => {
    return (
        <div style={styles.messageContainer}>
            <div>
                <p style={styles.alertBlock}>Alert:</p>
            </div>
                <span 
                        style={styles.messageAlert} contentEditable="true">{props.message}</span>
                <input type="submit" value="Update"></input>
        </div>
    )
}

const styles = {
    messageAlert: {
        fontSize: '17px',
        marginLeft: '36px',
        width: '200px',
        textAlign: 'left',
        wordWrap: 'break-word',
    },
    alertBlock: {
        fontSize: '17px',
        color: 'red',
    },
    messageContainer: {
        marginLeft: '-5px',
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
}

Message.propTypes = {
};