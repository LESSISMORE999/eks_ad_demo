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
      let result = yield call(itemService.query);
      if (!result){
        result = {"data": [{"goods_id_string":"4760539","id":1,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":2,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":3,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":4,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":5,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":6,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":7,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":8,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":9,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":10,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"}]};
      }
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
