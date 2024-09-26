
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.setState = {
        likes: 0,
        dislikes: 0,
        dontcares: 0,
    handleLike:() => {
        this.setState((prevState) => ({
            likes : prevState.likes + 1
        }));
    },
    handleDontCare: () => {
        this.setState((prevState) => ({
            dontcares : prevState.dontcares + 1
        }));
    },
    handleDislike: () => {
        this.setState((prevState) => ({
            dislikes : prevState.dislikes + 1
        }));
     }
    };
  }
  render() {
    return (
     <>
     <h1> Content Analysis</h1>
     <div className='content-rating'>
    <p>
    Please Tell Us What You Think.
    </p>
    <div className='rating-buttons'>
    <button className="like-button" onClick={this.state.handleLike}>
        Like ({this.state.likes})
    </button>
    <button className="dontcare-button" onClick={this.state.handleDontCare}>
        Don'tCare({this.state.dontcares})
    </button>
    <button className="dislike-button" onClick={this.state.handleDislike}>
        Dislike ({this.state.dislikes})
    </button>
</div>
</div>
     </>
    );
  }
}

export default ContentRating;
