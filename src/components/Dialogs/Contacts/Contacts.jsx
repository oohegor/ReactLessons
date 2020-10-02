import React from 'react';
import mod_css from './Contacts.module.css'
import {NavLink} from "react-router-dom";

const Contacts = (props) => {
    return (
        <div className={mod_css.contacts_item}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={mod_css.active}>{props.name}</NavLink>
        </div>
    );
};

export default Contacts;
