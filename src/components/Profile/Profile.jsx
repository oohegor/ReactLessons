import React from 'react';
import mod_css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={mod_css.content}>
            <ProfileInfo/>
            <MyPosts postDataArray = {props.postDataArray}/>
        </div>
    );
}

export default Profile;
