import React, { Component } from 'react';
import './App.css';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        {!this.state.isOpen ? (
          <div> {this.props.truncated}</div>
        ) : (
          <div>{this.props.review}</div>
        )}
        <button className="reviewButton" onClick={this.toggle}>
          Show More
        </button>
      </div>
    );
  }
}

export default Review;
