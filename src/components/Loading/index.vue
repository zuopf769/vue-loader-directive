<template>
  <transition name="xc-loading-fade">
    <div
      v-show="visible"
      class="xc-loading-mask">
      <div class="xc-loading-spinner">
        <svg class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none"/>
        </svg>
      </div>
    </div>
  </transition>
</template>

<style lang="less" scoped src="./Loading.less"></style>

<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
