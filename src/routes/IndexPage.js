import React from 'react';
import {connect} from 'dva';
import PropTypes from 'prop-types';
import ProductList from '../components/ProductList';

function IndexPage({ dispatch, product_list }) {
  function clickHandle(event) {
    dispatch({
      type: "item/redirect",
      payload: {
        pathname: "item",
        data: {
          we_chat_long_url_string: event.target.getAttribute("we_chat_long_url_string"),
          mini_program_image_url_string: event.target.getAttribute("src"),
        }
      }
    });
  }
  return (
    <ProductList product_list={product_list} clickHandle={clickHandle}/>
  );
}

IndexPage.propTypes = {
  product_list: PropTypes.array,
};

function mapStateToProps(state) {
  let product_list = state.item.product_list;
  if(!product_list){
    product_list = {"data": [{"goods_id_string":"4760539","id":1,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":2,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":3,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":4,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":5,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":6,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":7,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":8,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":9,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"},{"goods_id_string":"4760539","id":10,"mini_program_image_url_string":"http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg","we_chat_long_url_string":"https://mobile.yangkeduo.com/app.html?launch_url=duo_coupon_landing.html%3Fgoods_id%3D4760539%26pid%3D8931032_102909155%26cpsSign%3DCC_190801_8931032_102909155_b68a744eeaee4424929e594e66bbba36%26duoduo_type%3D2"}]};
  }
  return {
    product_list: product_list.data,
  };
}

export default connect(mapStateToProps)(IndexPage);
