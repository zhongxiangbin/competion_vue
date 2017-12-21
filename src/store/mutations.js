/**
 * Created by zhongxiangbin on 2017/12/16.
 */
import * as types from './mutation-type'

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING](state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST](state, playlist) {
    state.playlist = playlist
  },
  [types.SET_SEQUENCELIST](state, sequencelist) {
    state.sequenceList = sequencelist
  },
  [types.SET_PLAY_MODE](state, playMode) {
    state.mode = playMode
  },
  [types.SET_CURRENT_INDEX](state, currentIndex) {
    state.currentIndex = currentIndex
  }
}

export default mutations
