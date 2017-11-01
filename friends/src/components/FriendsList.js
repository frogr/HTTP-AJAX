import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriends } from "../actions";
import axios from "axios";

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addFriend}>
          <input
            value={this.state.postFriend}
            type="text"
            onChange={this.updateNewFriend}
          />
          <button type="submit"> Submit </button>
        </form>
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
          })};
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
      postFriend: ""
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

export default connect(mapStateToProps, { getFriends })(FriendsList);
