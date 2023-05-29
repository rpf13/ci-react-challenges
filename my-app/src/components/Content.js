import React, { Component } from 'react'
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from './PostItem';
import Loader from './Loader';

export class Content extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoaded: false,
      posts: []
    }
  }

  // Use the appropriate Component Lifecycle Method to add a timer
  // to set the state of isLoaded to true after 2 secs.
  componentDidMount() {
    setTimeout(()=>{
        this.setState({
            isLoaded: true,
            posts: savedPosts,
        })
    }, 2000)
  }
  // check docs/event_handler.png for explanation
  handleChange = (e) => {
    const name = e.target.value.toLowerCase();
    const filteredPosts = savedPosts.filter((post)=>{
      return post.name.toLocaleLowerCase().includes(name);
    })
    this.setState({
      posts: filteredPosts
    })
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label htmlFor='searchinput'>Search</label>
            <input
            type='search'
            id='searchinput'
            placeholder='By Author'
            // check docs/onchange_call.png for explanation
            onChange={(e) => this.handleChange(e)}
            />
            <h4>posts found {this.state.posts.length}</h4>
          </form>
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



          {/* Within the css.SearchResults div, conditionally render the PostItem
          component vs the Loader component based on the state of isLoaded */}
          {
            this.state.isLoaded ? <PostItem savedPosts={this.state.posts} /> : <Loader />
          }
        </div>
      </div>
    );
  }
}

export default Content