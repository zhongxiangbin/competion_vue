import {playMode} from 'common/js/config'

const state = {
  singer: {},  // 歌手列表
  playing: false, // 播放/暂停
  fullScreen: false, // 全屏播放
  playlist: [],  // 播放列表
  sequenceList: [], // 顺序播放
  mode: playMode.sequence, // 播放模式
  currentIndex: -1   // 当前播放
}

export default state
