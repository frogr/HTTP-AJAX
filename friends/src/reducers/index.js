import { combineReducers } from "redux";
import { GET_FRIENDS, POST_FRIEND } from "../actions";

const friendsReducer = (friends = [], action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return action.payload.data;
    case POST_FRIEND:
      return friends.concat(action.payload);
    default:
      return friends;
  }
};

const rootReducer = combineReducers({
  friends: friendsReducer
});

export default rootReducer;
