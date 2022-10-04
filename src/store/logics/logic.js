import {createLogic} from 'redux-logic';
import {
  REFRESH_DATA_FAIL,
  REFRESH_DATA_REQUEST,
  REFRESH_DATA_SUCCESS,
  SET_DATA_FAIL,
  SET_DATA_REQUEST,
  SET_DATA_SUCCESS,
} from '../actions/app';
import {PAGINATION_LIMIT} from '../../constants';

export const getDataLogic = createLogic({
  type: SET_DATA_REQUEST,
  latest: true,
  process({state, action}, dispatch, done) {
    (async function () {
      const data = await fetch(
        `https://api.escuelajs.co/api/v1/categories/4/products?offset=${action.payload}&limit=${PAGINATION_LIMIT}`,
      )
        .then(response => response.json())
        .then(data =>
          dispatch({
            type: SET_DATA_SUCCESS,
            payload: {
              data,
              paginationOffset: action.payload + PAGINATION_LIMIT,
            },
          }),
        )
        .catch(err => {
          dispatch({type: SET_DATA_FAIL, payload: err, error: true});
        })
        .then(() => done());
    })();
  },
});

export const refreshDataLogic = createLogic({
  type: REFRESH_DATA_REQUEST,
  latest: true,
  process({state, action}, dispatch, done) {
    (async function () {
      const data = await fetch(
        'https://api.escuelajs.co/api/v1/categories/4/products?offset=0&limit=8',
      )
        .then(response => response.json())
        .then(data => dispatch({type: REFRESH_DATA_SUCCESS, payload: data}))
        .catch(err => {
          dispatch({type: REFRESH_DATA_FAIL, payload: err, error: true});
        })
        .then(() => done());
    })();
  },
});
