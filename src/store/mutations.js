/**
 * Created by zhongxiangbin on 2017/12/16.
 */
import * as types from './mutation-type'

const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  }
}

export default mutations
