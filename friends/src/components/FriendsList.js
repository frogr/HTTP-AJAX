import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriends, postFriend } from "../actions";
import axios from "axios";

class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
    this.addFriend = this.addFriend.bind(this);
    this.updateNewFriend = this.updateNewFriend.bind(this);
  }

  render() {
    return (
      <div>
        {/* <form onSubmit={this.state.addFriend}>
          <input value={this.state.name} type="text" />
          <input value={this.state.age} type="text" />
          <input value={this.state.email} type="email" />
          <button type="submit"> Submit </button>
        </form> */}
        <ul>
          {this.props.friends.map((friend, i) => {
            return (
              <li key={i}>
                <p> {`Friend: ${i + 1}`}</p>
                <p> {`Name: ${friend.name}`}</p>
                <p> {`Age: ${friend.age}`}</p>
                <p> {`Email: ${friend.email}`}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  addFriend(event) {
    event.preventDefault();
    this.props.addFriend({
      friend: this.state.postFriend
    });
    this.setState({
      name: "",
      age: "",
      email: ""
    });
  }

  updateNewFriend(event) {
    this.setState({
      postFriend: event.target.value
    });
  }
}
const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postFriend: friend => {
      dispatch(postFriend(friend));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
