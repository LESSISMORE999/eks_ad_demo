import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProductList.css';

const ProductList = ({ clickHandle, product_list }) => {
  console.log(document.body.clientWidth);
  console.log(document.body.clientHeight);
  console.log(document.body.clientWidth / document.body.clientHeight);
  const result = document.body.clientWidth / document.body.clientHeight;
  let width = null;
  if (result > 1){
    width = document.body.clientWidth / (result * 2);
  }else{
    width = document.body.clientWidth / (1 / result);
  }
  const div_item = {
    width: width + "px"
  };
  const div_empty = {
    width: width + "px",
    height: 0,
  };
  if (product_list && product_list.length > 0){
    product_list = product_list.map((item, index) => (
      <img id={item.id} key={item.id} className={styles.item} src={item.mini_program_image_url_string} we_chat_long_url_string={item.we_chat_long_url_string} alt="小程序码" onClick={clickHandle} style={div_item}/>
    ));
  }
  let div_empty_array = new Array(6);
  for(let i = 0;i < div_empty_array.length;i++){
    div_empty_array[i] = <div id={-i} key={-i} style={div_empty}/>;
  }
  return (
    <div className="root">
      <div className={styles.div_content}>
        {product_list}
        {div_empty_array}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  productList: PropTypes.array,
};

export default ProductList;
