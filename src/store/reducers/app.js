import {
  SET_DATA_REQUEST,
  SET_DATA_SUCCESS,
  SET_DATA_FAIL,
  SET_SHOW_MODAL,
  REFRESH_DATA_SUCCESS,
  APPLY_DATA,
  SET_LOAD_MORE,
  SET_MAX_PRICE,
  SET_MIN_PRICE,
  CLEAR_FILTER,
  SET_MIN_MAX_PRICE,
} from '../actions/app';

const initialState = {
  status: '',
  paginationOffset: 0,
  show: false,
  loadMore: true,
  data: [],
  minPrice: 0,
  maxPrice: 1500,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_DATA_REQUEST: {
      return {
        ...state,
        status: 'pending',
      };
    }

    case SET_DATA_SUCCESS: {
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        status: 'ok',
        paginationOffset: action.payload.paginationOffset,
      };
    }

    case REFRESH_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        status: 'ok',
        paginationOffset: 0,
        loadMore: true,
      };
    }

    case APPLY_DATA: {
      return {
        ...state,
        data: [...action.payload],
        loadMore: false,
        status: 'ok',
      };
    }

    case SET_DATA_FAIL: {
      return {
        ...state,
        status: 'fail',
      };
    }

    case SET_SHOW_MODAL: {
      return {
        ...state,
        showModal: action.payload,
      };
    }

    case CLEAR_FILTER: {
      return {
        ...state,
        loadMore: action.payload,
        showModal: false,
        minPrice: 0,
        maxPrice: 1500,
      };
    }

    case SET_MIN_MAX_PRICE: {
      return {
        ...state,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice,
      };
    }

    default: {
      return state;
    }
  }
}
