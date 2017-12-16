<template>
  <transition name="slider">
    <music-list :songs="songs" :bg-image="bgImage" :title="title"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list.vue'
  import { getSingerDetails } from 'api/singer'
  import { ERR_OK } from 'api/config'
  import { createSong } from 'common/js/song'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        songs: []
      }
    },
    computed: {
      bgImage () {
        return this.singer.avatar
      },
      title () {
        return this.singer.name
      },
      ...mapGetters([
        'singer'
      ])
    },
    created () {
      console.log(this.singer)
      this._getDetails()
    },
    methods: {
      _getDetails() {
        if (!this.singer.id) {
          this.$router.push({
            path: '/singer'
          })
          return
        }
        getSingerDetails(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.data.list)
            console.log(this.songs)
            console.log(res.data.list)
          }
        })
      },
      _normalizeSongs (list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item  // es6解构，将item中的musicData对象解构出来
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slider-enter-active, .slider-leave-active
    transition: transform 0.3s

  .slider-enter, .slider-leave-to
    transform: translate3D(100%, 0, 0)
</style>
