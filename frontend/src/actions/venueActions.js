import {
    CREATE_VENUE_REQUEST,
    CREATE_VENUE_SUCCESS,
    CREATE_VENUE_FAIL,
    CLEAR_ERRORS,
  } from "../constants/venueConstants.js";
  import axios from "axios";
  
  // Create Venue
  export const createVenue = (venueData) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_VENUE_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post("/aak/p3/venue/new", venueData, config);
  
      dispatch({ type: CREATE_VENUE_SUCCESS, payload: data.venue });
    } catch (error) {
      dispatch({
        type: CREATE_VENUE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Clearing Errors
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  