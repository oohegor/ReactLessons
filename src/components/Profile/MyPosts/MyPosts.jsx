import React from 'react';
import mod_css from './MyPosts.module.css'
import Post from "./Post/Post";

const AddNewPost = () => {
    return (
        <div>
            New post
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
    );
};

const MyPosts = (props) => {

    let postElements = props.postDataArray.map((item) => <Post text={item.text} likeCount={item.likeCount}/>);

    return (
        <div className={mod_css.posts_block}>
            <h2>My post</h2>
            <AddNewPost/>
            {postElements}
        </div>
    );
};

export default MyPosts;
