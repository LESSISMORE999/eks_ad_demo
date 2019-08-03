import React from 'react';
import {connect} from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  function clickHandle(event) {
    console.log(event)
    console.log(event.target.id)
  }
  return (
    <div className="root">
      <div className={styles.div_content}>
        <img id="1" className={styles.item} onClick={clickHandle} src="http://images.pinduoduo.com/mrk/2019-08-01/65daf031-cf3d-4c4f-bfab-9e33128ab347.jpg" alt="小程序码"/>
        <img id="2" className={styles.item} src="/src/assets/20190801_1820.jpg" alt="小程序码"/>
        <img id="3" className={styles.item} src="/src/assets/20190801_1820.jpg" alt="小程序码"/>
        <img id="4" className={styles.item} src="/src/assets/20190801_1820.jpg" alt="小程序码"/>
        <img id="5" className={styles.item} src="/src/assets/20190801_1820.jpg" alt="小程序码"/>
        <img id="6" className={styles.item} src="/src/assets/20190801_1820.jpg" alt="小程序码"/>
        <img id="7" className={styles.item} src="/src/assets/20190801_1820.jpg" alt="小程序码"/>
        <img id="8" className={styles.item} src="/src/assets/20190801_1820.jpg" alt="小程序码"/>
        <img id="9" className={styles.item} src="/src/assets/20190801_1820.jpg" alt="小程序码"/>
        <img id="10" className={styles.item} src="/src/assets/20190801_1820.jpg" alt="小程序码"/>
        <div className={styles.div_empty}/>
        <div className={styles.div_empty}/>
        <div className={styles.div_empty}/>
        <div className={styles.div_empty}/>
        <div className={styles.div_empty}/>
        <div className={styles.div_empty}/>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
