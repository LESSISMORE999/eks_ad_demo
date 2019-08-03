import React from 'react';
import {connect} from 'dva';
import PropTypes from 'prop-types';
import styles from './Item.css';

function Item({ dispatch, we_chat_long_url_string, mini_program_image_url_string }) {
  function clickHandle(event) {
    window.location.href = we_chat_long_url_string
  }
  return (
    <div className="root">
      <img id="1" className={styles.item} src={mini_program_image_url_string} alt="小程序码"/>
      <div className={styles.div_empty}/>
      <div className={styles.div_foot}>
        <div className={styles.div_save}>保存图片</div>
        <div className={styles.div_open} onClick={clickHandle}>打开拼多多</div>
      </div>
    </div>
  );
}

Item.propTypes = {
  we_chat_long_url_string: PropTypes.string,
  mini_program_image_url_string: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    we_chat_long_url_string: state.item.we_chat_long_url_string,
    mini_program_image_url_string: state.item.mini_program_image_url_string,
  };
}

export default connect(mapStateToProps)(Item);
