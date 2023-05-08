import React, { useReducer, useContext } from "react";
import axios from "axios";
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
import reducer from "./reducer";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  showAlert: false,
  alerttext: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  jobLocation: userLocation || "",
  showSidebar: false,
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // axios setup
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalstorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };
  const removeUserToLocalstorage = () => {
    localStorage.setItem("user");
    localStorage.setItem("token");
    localStorage.setItem("location");
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const response = await axios.post(`api/v1/auth/${endPoint}`, currentUser);
      // console.log(response);
      const { user, token, location } = response.data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });
      // local storage later
      addUserToLocalstorage({ user, token, location });
    } catch (error) {
      // console.log(error.response);
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserToLocalstorage();
  };

  const getAllUsers = async () => {
    let url = `/auth/all`;
    dispatch({ type: GET_USER_BEGIN });
    try {
      const { data } = await authFetch(url);
      // console.log(data);
      // const { books } = data;
      dispatch({
        type: GET_USER_SUCCESS,
        payload: {
          data,
        },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser();
    }
    clearAlert();
  };

  const setupMedicine = async ({ medicineObj, endPoint }) => {
    dispatch({ type: SETUP_MEDICINE_BEGIN });
    console.log(medicineObj);
    try {
      const response = await axios.post(
        `api/v1/medicine/${endPoint}`,
        medicineObj
      );
      // console.log(response);
      const { medicine } = response.data;
      console.log(medicine);
      dispatch({
        type: SETUP_MEDICINE_SUCCESS,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: SETUP_MEDICINE_ERROR,
      });
    }
    clearAlert();
  };

  const getAllMedicines = async () => {
    let url = `/medicine`;
    dispatch({ type: GET_MEDICINE_BEGIN });
    try {
      const { data } = await authFetch(url);
      dispatch({
        type: GET_MEDICINE_SUCCESS,
        payload: {
          data,
        },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser();
    }
    clearAlert();
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        toggleSidebar,
        logoutUser,
        getAllUsers,
        setupMedicine,
        getAllMedicines,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
