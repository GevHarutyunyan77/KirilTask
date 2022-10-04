export const SET_DATA_REQUEST = 'SET_DATA_REQUEST';
export const SET_DATA_SUCCESS = 'SET_DATA_SUCCESS';
export const SET_DATA_FAIL = 'SET_DATA_FAIL';
export const SET_SHOW_MODAL = 'SET_SHOW_MODAL';
export const REFRESH_DATA_REQUEST = 'REFRESH_DATA_REQUEST';
export const REFRESH_DATA_SUCCESS = 'REFRESH_DATA_SUCCESS';
export const REFRESH_DATA_FAIL = 'REFRESH_DATA_FAIL';
export const APPLY_DATA = 'APPLY_DATA';
export const CLEAR_FILTER = 'CLEAR_FILTER';
export const SET_MIN_MAX_PRICE = 'SET_MIN_MAX_PRICE';

export function getData(offset) {
  return {
    type: SET_DATA_REQUEST,
    payload: offset,
  };
}

export function refreshData() {
  return {
    type: REFRESH_DATA_REQUEST,
    payload: {},
  };
}

export function applyData(data) {
  return {
    type: APPLY_DATA,
    payload: data,
  };
}

export function setShowModal(bool) {
  return {
    type: SET_SHOW_MODAL,
    payload: bool,
  };
}

export function clearFilter() {
  return {
    type: CLEAR_FILTER,
  };
}

export function setMinMaxPrice(minPrice, maxPrice) {
  return {
    type: SET_MIN_MAX_PRICE,
    payload: {minPrice, maxPrice},
  };
}
