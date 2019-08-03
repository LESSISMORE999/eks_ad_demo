import React from 'react';
import {connect} from 'dva';
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
};

function mapStateToProps(state) {
  return {
    product_list: state.item.product_list.data,
  };
}

export default connect(mapStateToProps)(IndexPage);
