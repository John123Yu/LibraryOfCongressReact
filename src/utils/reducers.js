import { ADD_TITLES, CLEAR_TITLES, UPDATE_TITLES } from './actions';

// Notice we moved the initial state object from our CarComponent to the reducer itself
const initalState = {
  titles: []
};

// Here we pass a default value of initalState if none is provided
export default function reducer(state = initalState, action) {
  switch (action.type) {
    case UPDATE_TITLES: {
        return {
            ...state,
            titles: [...action.payload]
        }
    }
    case ADD_TITLES: {
      return {
        ...state,
        titles: [...state.titles, ...action.payload],
      };
    }
    case CLEAR_TITLES: {
        return {
          ...state,
          titles: [],
        };
      }
    default: {
      return state;
    }
  }
}
