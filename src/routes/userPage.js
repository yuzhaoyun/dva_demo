import React, { Fragment } from 'react';
import { Link } from 'dva/router'
import Child from '../components/child'

class userPage extends React.Component {
  render () {
    return <Fragment>
      <div>
        我是用户页
      </div>
      <Link to="/">首页</Link>
      <br/>
      <button onClick={this.handleToIndex}>首页</button>
      <Child></Child>
    </Fragment>
  }
  handleToIndex = () => {
    this.props.history.push('./')
  }
}


export default userPage;
