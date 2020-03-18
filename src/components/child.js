import React from 'react'
import { withRouter } from 'dva/router'

class Child extends React.Component {
  render () {
     return <div>
       <h1>我是通用组件</h1>
       <button onClick={this.handleToIndex}>首页_Index</button>
     </div>
  }
  handleToIndex = () => {
    this.props.history.push('/');
  }
}
export default withRouter(Child);
