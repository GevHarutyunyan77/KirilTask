import {
  SET_DATA_REQUEST,
  SET_DATA_SUCCESS,
  SET_DATA_FAIL, SET_SHOW_MODAL, REFRESH_DATA_SUCCESS, APPLY_DATA,
} from "../actions/app";

const initialState = {
  status:'',
  paginationOffset: 0,
  show: false,
  data:[]
}

export default function(state = initialState, action) {
  switch (action.type) {

    case SET_DATA_REQUEST: {
      return {
        ...state,
        status: "pending",
      };
    }

    case SET_DATA_SUCCESS: {
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        status: "ok",
        paginationOffset: action.payload.paginationOffset
      };
    }

    case REFRESH_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        status: "ok",
        paginationOffset: 0
      };
    }
    case APPLY_DATA: {
      return {
        ...state,
        data: action.payload,
        status: "ok",
      };
    }
    case SET_DATA_FAIL: {
      return {
        ...state,
        status: "fail",
      };
    }

    case SET_SHOW_MODAL: {
      return {
        ...state,
        showModal: action.payload,
      };
    }
      default: {
      return state
    }
  }
}
