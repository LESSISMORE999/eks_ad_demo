import React from 'react';
import {connect} from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  function clickHandle(event) {
    console.log(event)
    console.log(event.target.id)
  }
  return (
    <div className={styles.div_content}>
      <img id="1" className={styles.test} onClick={clickHandle} src="/src/assets/20190801_1820.jpg"/>
      <img id="2" className={styles.test} src="/src/assets/20190801_1820.jpg"/>
      <img id="3" className={styles.test} src="/src/assets/20190801_1820.jpg"/>
      <img id="4" className={styles.test} src="/src/assets/20190801_1820.jpg"/>
      <img id="5" className={styles.test} src="/src/assets/20190801_1820.jpg"/>
      <img id="6" className={styles.test} src="/src/assets/20190801_1820.jpg"/>
      <img id="7" className={styles.test} src="/src/assets/20190801_1820.jpg"/>
      <img id="8" className={styles.test} src="/src/assets/20190801_1820.jpg"/>
      <img id="9" className={styles.test} src="/src/assets/20190801_1820.jpg"/>
      <img id="10" className={styles.test} src="/src/assets/20190801_1820.jpg"/>
      <div className={styles.div_empty}/>
      <div className={styles.div_empty}/>
      <div className={styles.div_empty}/>
      <div className={styles.div_empty}/>
      <div className={styles.div_empty}/>
      <div className={styles.div_empty}/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
