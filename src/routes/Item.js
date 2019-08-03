import React from 'react';
import {connect} from 'dva';
import styles from './Item.css';

function Item() {
  function clickHandle(event) {
    console.log(event)
    console.log(event.target.id)
  }
  return (
    <div className="root">
      <img id="1" className={styles.item} onClick={clickHandle} src="/src/assets/20190801_1820.jpg" alt="小程序码"/>
      <div className={styles.div_empty}/>
      <div className={styles.div_foot}>
        <div className={styles.div_save}>保存图片</div>
        <div className={styles.div_open}>打开拼多多</div>
      </div>
    </div>
  );
}

Item.propTypes = {
};

export default connect()(Item);
