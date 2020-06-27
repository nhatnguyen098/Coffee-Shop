import {
  DISPLAY_MODAL,
} from "./../../constants/actionTypes/navBarType";
let initState = {
  show: false,
};
export default (state = initState, action: any) => {
  switch (action.type) {
    case DISPLAY_MODAL:
      return {...state,show:action.show};
    default:
      return { ...state };
  }
};
