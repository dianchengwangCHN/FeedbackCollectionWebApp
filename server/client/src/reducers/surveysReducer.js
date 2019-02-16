import { FETCH_SURVEYS, DELETE_SURVEY } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload.reverse();
    case DELETE_SURVEY:
      return state.filter(survey => {
        return survey._id !== action.payload;
      });
    default:
      return state;
  }
}
