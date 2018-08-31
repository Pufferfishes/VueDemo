<template>
  <div class="my-block">
    <div class="userInfo-block">
      <div class="userInfo-block-con">
        <div class="user-info">
          <img :src="userIcon"/>
          <div class="user-detail">
            <span class="user-level">{{level}}</span>
            <div class="block115">
              <span>{{userName}}<i>{{userNumber}}</i></span>
            </div>
          </div>
        </div>
        <div class="bonus-box">
          <div v-for="bonus in bonuss" class="bonus-item">
            <div class="block106">
                <span><em>{{bonus.num}}</em></span>
            </div>
            <span>{{bonus.tips}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="my-list">
      <div v-for="item in lists" class="my-list-item" @click="$goRoute(item.route)">
        <img :src="item.icon"/>
        <div class="list-item-con">
          <span>{{item.name}}</span>
          <img src="../assets/images/rightCrow.png"/>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {
      userIcon: require("../assets/images/friend-head.png"),
      level: "区域代理",
      userName: "马铃薯",
      userNumber: "13700000000",
      bonuss: [
        {
          tips: "我的余额",
          num: "0.00"
        },
        {
          tips: "已提现",
          num: "0.00"
        },
        {
          tips: "今日收入",
          num: "0.00"
        },
        {
          tips: "股权积分",
          num: "0.00"
        }
      ],
      lists: [
        {
          icon: require('../assets/images/icon-recommend.png'),
          name: "我的团队",
          route: "/comingSoon"
        },
        {
          icon: require('../assets/images/icon-recommend.png'),
          name: "提现",
          route: "/comingSoon"
        },
        {
          icon: require('../assets/images/icon-recommend.png'),
          name: "绑定银行卡",
          route: "/comingSoon"
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
