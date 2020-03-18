import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import * as apis from '../services/example'

class IndexPage extends React.Component {
  componentWillMount () {
    apis.testCnode().then(res=>{
      console.log(res);
    })

    // 测试mock数据
    apis.testMock().then(res => {
      console.log(res);
    })
  }
  render () {
    // console.log(this.props.cnodeData)
    return (
      <div className={styles.normal}>
        我是首页
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><button onClick={this.handleUser}>用户__user</button></li>
          <h1>{this.props.msg}</h1>
          <h1>{this.props.name}</h1>
          <button onClick={this.handleSetName}>setName</button>
          <br/>
          <br/>
          <button onClick={this.handleSetNameAsync}>setNameAsync</button>
          <br/>
          <br/>
          <button onClick={this.testCnode}>testCnode</button>
        </ul>
      </div>
    );
  }
  handleUser = () => {
    this.props.history.push('/user');
  }
  handleSetName = () => {
    this.props.dispatch({
      type: 'indexTest/setName',
      data: {
        name: '以人为本, 造福天下'
      }
    })
  }
  handleSetNameAsync = () => {
    this.props.dispatch({
      type: 'indexTest/setNameAsync',
      data: {
        name: '以人为本, 造福天下'
      }
    })
  }
  testCnode = () => {
    this.props.dispatch({
      type: 'indexTest/getCnode'
    })
  }
}

const mapStateToProps = state => {
  return {
    msg: '我爱北京天安门',
    name: state.indexTest.name,
    cnodeData: state.indexTest.cnodeData
  }
}

export default connect(mapStateToProps)(IndexPage);
