import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  SETUP_MEDICINE_BEGIN,
  SETUP_MEDICINE_SUCCESS,
  SETUP_MEDICINE_ERROR,
  GET_MEDICINE_BEGIN,
  GET_MEDICINE_SUCCESS,
} from "./action";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "please provide all the values !",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.userLocation,
      jobLocation: action.payload.jobLocation,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      jobLocation: "",
      userLocation: "",
    };
  }

  if (action.type === GET_USER_BEGIN) {
    return { ...state, isloading: true, showAlert: false };
  }
  if (action.type === GET_USER_SUCCESS) {
    // console.log(action.payload.data);
    return { ...state, isloading: false, userlist: action.payload.data };
  }

  if (action.type === SETUP_MEDICINE_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_MEDICINE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === SETUP_MEDICINE_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === GET_MEDICINE_BEGIN) {
    return { ...state, isloading: true, showAlert: false };
  }
  if (action.type === GET_MEDICINE_SUCCESS) {
    // console.log(action.payload.data);
    return { ...state, isloading: false, medicinelist: action.payload.data };
  }
  throw new Error(`no such action : ${action}`);
};

export default reducer;
