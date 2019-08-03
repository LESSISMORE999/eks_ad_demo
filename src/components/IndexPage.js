import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './IndexPage.css';

export default class IndexPage extends Component {
  render() {
    const { id, gmtCreate, gmtModified , isDeleted ,goodsIdString ,weChatLongUrlString ,miniProgramImageUrlString} = this.props
    return (
      <div>
        <img id={id} src={miniProgramImageUrlString} alt="小程序码" gmtCreate={gmtCreate} gmtModified={gmtModified} isDeleted={isDeleted} goodsIdString={goodsIdString} weChatLongUrlString={weChatLongUrlString}/>
      </div>
    )
  }
}

IndexPage.propTypes = {
  id: PropTypes.number,
  gmtCreate: PropTypes.object,
  gmtModified: PropTypes.object,
  isDeleted: PropTypes.number,
  goodsIdString: PropTypes.string,
  weChatLongUrlString: PropTypes.string,
  miniProgramImageUrlString: PropTypes.string,
}
