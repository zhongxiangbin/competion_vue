<template>
  <div class="palyer" v-show="playlist.length > 0">
    <div class="normal-player" v-show="fullScreen" ref="fullScreen"></div>
    <div class="mini-player" v-show="!fullScreen"></div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {

    }
</script>

<style scoped lang="">
</style>
