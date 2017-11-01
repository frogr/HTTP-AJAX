import axios from "axios";

export const GET_FRIENDS = "GET_FRIENDS";
export const POST_FRIEND = "POST_FRIEND";

export const getFriends = () => {
  const friendsEndpoint = "http://localhost:5000/friends";
  const friends = axios.get(friendsEndpoint);
  return {
    type: GET_FRIENDS,
    payload: friends
  };
};
export const postFriend = () => {
  const postFriendEndpoint = "http://localhost:5000/new-friend";
  const friend = axios.post(postFriendEndpoint);
  return {
    type: POST_FRIEND,
    payload: friend
  };
};
