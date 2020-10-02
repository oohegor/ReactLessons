import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg'/>
            {props.text}
            <div>
                <button>Like</button>
                <span>{props.likeCount} &#128077;</span>
            </div>
        </div>
    );
}

export default Post;
