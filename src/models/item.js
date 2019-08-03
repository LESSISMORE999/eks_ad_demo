import { routerRedux } from 'dva/router';
import * as itemService  from '../services/api';

export default {
  namespace: 'item',
  state: {
    we_chat_long_url_string: '',
    mini_program_image_url_string: '',
    product_list: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(({ pathname, query }) => {
        if (pathname === "/") {
          dispatch({ type: 'query' , payload: query});
        }
      });
    },
  },
  effects: {
    *query({ payload }, { call, put, select}) {
      const result = yield call(itemService.query);
      yield put({
        type: 'save',
        payload:{
          product_list:result.data
        }
      });
    },
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    // 路由跳转
    *redirect ({ payload: { pathname, data }}, { call, put }) {
      yield put(routerRedux.push({
        pathname: pathname
      }));
      yield put({
        type: 'save',
        payload:{
          we_chat_long_url_string: data.we_chat_long_url_string,
          mini_program_image_url_string: data.mini_program_image_url_string,
        }
      });
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
