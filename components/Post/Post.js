import './Post.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';

export const Post = (props) => {
    const [ likes, setLikes ] = useState(props.ups);
    const [ isLiked, setIsLiked ] = useState(false);
    const [ buttonLabel, setButtonLabel ] = useState('Like')

    const upvote = () => {
        if (!isLiked) {
            setLikes(likes + 1);
            setIsLiked(true);
            setButtonLabel('Unlike')
        } else {
            setLikes(likes - 1);
            setIsLiked(false);
            setButtonLabel('Like')
        }
    }

    return(
            <div className='post'>
                <h1>{props.title}</h1>
                <p>Posted By: <Link to={`/users/${props.author}`}>{props.author}</Link></p>
                {props.postHint === 'image' ? <img src={props.src} width='600px' height='600px'/> : '' }
                {props.postHint === 'hosted:video' ? 
                    <video className='videoPlayer' autoPlay='false'>
                        <source src={props.src} type='video/mp4' />
                    </video> : '' }
                <p>{props.userText}</p>
                <p>Post has: {likes} likes</p>
                <button className='likes' onClick={upvote}>Click to {buttonLabel}</button>
            </div>
    )
}