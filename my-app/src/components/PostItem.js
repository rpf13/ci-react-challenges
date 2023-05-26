import React from "react"
import css from "./css/PostItem.module.css";


function PostItem(props) {
    return (
        props.savedPosts.map(post => {
            // simple form via copying the code from Content.js
            // return <div className={css.SearchItem} key={post.title}>
            //     <p>{post.title}</p>
            //     <p>{post.name}</p>
            //     <img src={post.image} alt="random"/>
            //     <p>{post.description}</p>
            // </div>

            // Extra task destructuring - more advanced solution
            // Destructuring your props can be a more efficient way to reference values
            // from an object or array. Within the PostItem map function, 
            // have you destructured your 'props' to 4 individual values e.g. 
            // savedPosts.map((post) => { const { name, title, description, image } = post;
            // Your individual references to the props variables can now be simplified. 
            // Have you replaced the references to props using these new values? e.g. {props.title}
            // can now be referenced as {title}.

            const {title, name, image, description} = post
            return <div className={css.SearchItem} key={title}>
                <p>{title}</p>
                <p>{name}</p>
                <img src={image} alt="random"/>
                <p>{description}</p>
            </div>
            }
        )
    )
}

export default PostItem