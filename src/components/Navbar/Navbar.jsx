import React from 'react';
import mod_css from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Link = (props) => {
    return (
        <div className={mod_css.item}>
            <NavLink to={props.href} activeClassName={mod_css.active}>{props.linkName}</NavLink>
        </div>
    );
}

const Navbar = () => {
    return (
        <nav className={mod_css.nav}>
            <Link href={"/profile"} linkName={"Profile"}/>
            <Link href={"/dialogs"} linkName={"Dialogs"}/>
            <Link href={"/news"} linkName={"News"}/>
            <Link href={"/music"} linkName={"Music"}/>
            <Link href={"/settings"} linkName={"Settings"}/>
        </nav>
    );
}

export default Navbar;
