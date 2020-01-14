import * as actionTypes from '../actions/actionTypes';

const initialState = {};

export default function(state = initialState, action = { type: '', payload: {} }) {
  switch (action.type) {
    case actionTypes.ADD_EDIT_TEMPLATE: {
      return { ...state, [action.payload.id]: action.payload };
    }
    default: {
      return state;
    }
  }
}
