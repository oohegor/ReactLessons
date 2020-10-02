import React from 'react';
import mod_css from './Messages.module.css'

const Messages = (props) => {
    return (
        <div className={mod_css.messages_item}>{props.message}</div>
    );
};

export default Messages;
