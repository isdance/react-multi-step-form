import {
  CHANGE_CHECKBOX,
  SHOW_PROGRESSBAR,
  HIDE_PROGRESSBAR,
  NEXT_STEP,
} from './constants';

export const firstStepFormInitialState = {
  a1: false,
  a2: false,
  showProgressBar: false,
  completed: false,
};

const verifyStateToGo = (state) => {
  if (state.a1 || state.a2) {
    return {
      ...state,
      completed: true,
      showProgressBar: false,
    };
  }

  return {
    ...state,
    showProgressBar: false,
  };
};

const firstStepFormReducer = (state = firstStepFormInitialState, action) => {
  switch (action.type) {
    case CHANGE_CHECKBOX:
      return {
        ...state,
        [action.payload.name]: !state[action.payload.name],
      };
    case SHOW_PROGRESSBAR:
      return {
        ...state,
        showProgressBar: true,
      };
    case HIDE_PROGRESSBAR:
      return {
        ...state,
        showProgressBar: false,
      };
    case NEXT_STEP:
      return verifyStateToGo(state);
    default:
      return state;
  }
};

export default firstStepFormReducer;
