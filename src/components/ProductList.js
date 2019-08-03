import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProductList.css';

const ProductList = ({ clickHandle, product_list }) => {
  if (product_list && product_list.length > 0){
    product_list = product_list.map((item, index) => (
      <img id={item.id} key={item.id} className={styles.item} src={item.mini_program_image_url_string} we_chat_long_url_string={item.we_chat_long_url_string} alt="小程序码" onClick={clickHandle}/>
    ));
  }
  let div_empty_array = new Array(6);
  for(let i = 0;i < div_empty_array.length;i++){
    div_empty_array[i] = <div id={-i} key={-i} className={styles.div_empty}/>;
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
