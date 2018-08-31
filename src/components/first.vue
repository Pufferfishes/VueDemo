<template>
  <div class="vue-body">
    <router-view />
    <div class="footer">
        <router-link active-class="active" to="/index">
          <i class="index"></i>
          首页
        </router-link>
        <router-link active-class="active" to="/live">
          <i class="live"></i>
          旅游直播
        </router-link>
        <router-link active-class="active" to="/frmTrade">
          <i class="frmTrade"></i>
          发现
        </router-link>
        <router-link active-class="active" to="/my">
          <i class="my"></i>
          我的
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'first'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
