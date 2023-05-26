import React, { Component } from 'react'
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from './PostItem';

export class Content extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
          {/* Part 1: Creating map function */}
          {/* {savedPosts.map((post) => {
            return (
              <div className={css.SearchItem} key={post.title}>
                <p>{post.title}</p>
                <p>{post.name}</p>
                <img src={post.image} alt="random"></img>
                <p>{post.description}</p>
              </div>
            );
          })} */}

          {/* Part 2: Creating a child component
          Note: Make sure to pass your {savedPosts} as props, 'posts', to the PostItem.js Child Component.
          You will also need to reference these props in PostItem
          */}

          <PostItem savedPosts={savedPosts} />
        </div>
      </div>
    );
  }
}

export default Content