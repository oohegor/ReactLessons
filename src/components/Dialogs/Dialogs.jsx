import React from 'react';
import mod_css from './Dialogs.module.css'
import Contacts from "./Contacts/Contacts";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    let contactsElements = props.contactsArray.map((item) => <Contacts id={item.id} name={item.name}/>);
    let messagesElements = props.messagesArray.map((item) => <Messages message={item.message}/>);

    return (
        <div className={mod_css.dialogs}>
            {/*<h2>Contacts</h2>*/}
            <div className={mod_css.contacts}>
                {contactsElements}
            </div>
            <div className={mod_css.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;
