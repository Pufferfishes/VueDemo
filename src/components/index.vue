<template>
  <div class="index-block">
    <img src="../assets/images/index-1.png">
    <div class="agent-buy">
      <span @click="$goRoute('/comingSoon')" >我要购买旅游卡</span>
      <img src="../assets/images/buy.png">
    </div>
    <div class="grid-block">
      <div class="grid-item" v-for="item in items" @click="$goRoute(item.link)">
        <img :src="item.icon"/>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      items:[
        {
          name: "机票",
          icon: require("../assets/images/planeTicket.png"),
          link: "/comingSoon"
        },
        {
          name: "火车票",
          icon: require("../assets/images/trainTickets.png"),
          link: "/comingSoon"
        },
        {
          name: "酒店",
          icon: require("../assets/images/hotel.png"),
          link: "/comingSoon"
        },
        {
          name: "景点预约",
          icon: require("../assets/images/appointment.png"),
          link: "/comingSoon"
        },
        {
          name: "电子导游",
          icon: require("../assets/images/electronicGuide.png"),
          link: "/comingSoon"
        },
        {
          name: "共享导游",
          icon: require("../assets/images/sharedGuide.png"),
          link: "/comingSoon"
        },
        {
          name: "旅游补贴",
          icon: require("../assets/images/navigation.png"),
          link: "/comingSoon"
        },
        {
          name: "定制旅游",
          icon: require("../assets/images/bespoke.png"),
          link: "/comingSoon"
        },
        {
          name: "旅游攻略",
          icon: require("../assets/images/strategy.png"),
          link: "/comingSoon"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-block>img{
  width: 100%;
  height: auto;
}
</style>
