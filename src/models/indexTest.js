import * as apis from '../services/example'

export default {
  namespace: 'indexTest',
  state: {
    name: 'Peace',
    cnodeLists: []
  },
  reducers: {
    setName (state, payload) {
      let _state = JSON.parse(JSON.stringify(state));
      _state.name = payload.data.name;
      return _state;
    },
    setCnodeDataList (state, payload) {
      let _state = JSON.parse(JSON.stringify(state));
      _state.cnodeLists = payload.data;
      return _state;
    },
    testPath (state, payload) {
      console.log('用户页');
      return state;
    }
  },
  effects: {
    *setNameAsync ({payload}, {put, call}) {
      yield put({
        type: 'setName',
        data: {
          name: "以人为本, 造福天下"
        }
      })
    },
    *getCnode ({payload}, {put, call}) {
      let rel = yield call(apis.testCnode)
      if (rel.data) {
        yield put({
          type: 'setName',
          data: rel.data
        })
      }
      console.log(rel)
    }
  },
  subscriptions: {
    haha ({dispatch, history}) {
      history.listen(({pathname}) => {
        if (pathname === "/user") {
          dispatch({
            type: 'testPath'
          })
        }
      })
    }
  }
}
