<template>
  <div class="header" id='nnn'>
    <!--header+left-->
    <div class="personalInfo">
      <!--headImg-->
      <img class='headImg' alt='店的头像' v-bind:src='mySeller.avatar'>
      <!--Right-->
      <div class="rightInfo">
        <div class="infoFirst"><!--shopName-->
          <span class="shopIcon"></span><!--品牌icon-->
          <span class="shopName">{{mySeller.name}}</span>
        </div>
        <div class="infoSecond"><!--配送时间-->
          {{mySeller.description}}/{{mySeller.deliveryTime}}分钟送达
        </div>
        <div v-if="mySeller.supports"><!--第三行：满减优惠-->
          <span class="decreaseIcon"></span>
          <span class="decreaseInfo">{{mySeller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <!--公告-->
    <div class="announcement">
      <span class="annonceIcon"></span>
      <span class="announceText">{{ mySeller.bulletin }}</span>
    </div>
  </div>
</template>
<script>
// 引入data数据
// eslint-disable-next-line
import data from '@/common/data.json'
export default {
  name: 'myHeader',
  // eslint-disable-next-line
  data() {
    return {
      seller: {}
    }
  },
  created () {
    this.mySeller = data.seller
  }
}
// console.log('test')
// eslint-disable-next-line
</script>
<style>
.headImg{/*店铺头像的样式*/
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-style: double;
  border-color:brown;
  position:absolute;
  left:20px;
  margin-top:5px;
}
.personalInfo{/*个人信息-头像-店铺名-配送方式-优惠-公告*/
  display:flex;
  /*background-image:url(https://c-ssl.duitang.com/uploads/item/201908/17/20190817214434_5Psz8.jpeg);*/
  background-color:rgba(0,150,255,0.7);
  width:100%;
  height:65px;
}
.header{/*整个头部导航*/
  width:100%;
  height:100%;
  padding:0;
  margin:0;
}
body{/*修改body消除html上方空白*/
  position:relative;
  top:-60px;
  margin:0px;
}
.rightInfo{/*右侧所有信息*/
  width: 500px;
  height: 50px;
  position: relative;
  left: 80px;
  top:8px;
}
.infoFirst{/*第一行信息*/
  width: 200px;
  height: 20px;
}
.shopIcon{/*品牌icon*/
  display: inline-block;
  width: 30px;
  height: 15px;
  background-size: 30px 15px;
  background-image:url(./brand.png);
  background-repeat: no-repeat;
  white-space: nowrap;
  float: left;
}
.shopName{/*店铺名字*/
  display: inline-block;
  width:130px;
  height:15px;
  font-size:12px;
  white-space: nowrap;
  overflow: hidden;
  float: left;
  text-align:left;
  padding-left:6px;
}
.infoSecond{/*第二行：配送信息*/
  font-size:10px;
  text-align: left;
}
.decreaseIcon{/*满减icon*/
  display: inline-block;
  vertical-align: top;
  width: 10px;
  height: 10px;
  margin-right: 4px;
  background-size: 10px 10px;
  background-repeat: no-repeat;
  background-image:url(./decrease.png);
  float: left;
}
.decreaseInfo{/*满减信息*/
  float: left;
  font-size:10px;
}
.annonceIcon{
  width: 18px;
  height: 10px;
  margin-left: 4px;
  margin-right:4px;
  background-size: 18px 10px;
  background-repeat: no-repeat;
  background-image:url(./announcement.png);
  float: left;
}
.announcement{/*公告*/
  font-size:10px;
  float: left;
  overflow:hidden;
  background-color: rgba(0,150,255,0.8);
  width:100%;
}
.announceText{
  float: left;
}
</style>
