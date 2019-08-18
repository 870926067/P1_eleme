<template>
<div>
  <div class="goods">
    <div
      class="leftMenu"
      ref="menuWrapper"
    >
      <!--左侧的导航菜单-->
      <ul>
        <li
          v-for="(item, index) in myGoods"
          :key="index"
          class="leftList"
          @click="selectMenu(index,$event)"
          style="cursor:pointer"
        >
          <div class="textList">
            {{ item.name }}
          </div>
        </li>
      </ul>
    </div>
    <div
      class="rightList"
      ref="foodsWrapper"
    >
      <ul>
        <!--遍历-->
        <li
          v-for="(item, index) in myGoods"
          :key="index"
          class="food-list-hook"
        >
          <h1 class="rightTitle">{{item.name}}</h1>
          <ul>
            <li
              @click="selectFood(food, $event)"
              v-for="(food, index) in item.foods"
              :key="index"
              class="foodListStyle"
            >
              <div class="icon"> <!--商品小图标-->
                <img width="57" height="57" :src="food.icon" alt="food.name">
              </div>
              <h2 class="foodStyle">{{ food.name }}</h2>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import data from '@/common/data.json'
import BScroll from 'better-scroll'
export default {
  name: 'goods',
  data () {
    return {
      goods: []
    }
  },
  created () {
    this.myGoods = data.goods
    this.$nextTick(() => { // vue是异步更新，必须加$nextTick,才能在nextTick里面更新，实现滚动
      this._initScroll()
    })
    console.log('load goods ' + this.myGoods[0].name)
  },
  methods: {
    selectMenu (index, event) {
      console.log(' index: ' + index)
      // eslint-disable-next-line
      // if (!event._constructed) {
      //   // eslint-disable-next-line
      //   console.log(' fail: ' + index)
      //   return
      // }
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
      let el = foodList[index] // 滚动到某元素
      console.log(el)
      this.foodsScroll.scrollToElement(el, 100)
      // document.el.scrollIntoView()
    },
    _initScroll () {
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      })
      console.log('initScroll')
    }
  }
}
</script>

<style>
.goods {
  display: flex;
  bottom: 46px;
  width: 100%;
  height: 5000px;
  overflow: hidden;
}
.leftMenu {
  color: black;
  font-size: 12px;
  height: 100%;
  width: 160px;
}
.leftList {
  /*左导航栏的list*/
  height: 50px;
  list-style: none;
  text-align: left;
  margin-top: 5px;
  border: 1px solid #666;
  box-shadow: 0px 1px 3px rgba(34, 25, 25, 0.2);
  background-color: rgba(49, 49, 245, 0.4);
}
.textList {
  padding-left: 6px;
  height: 30px;
  margin-top: 15px;
}
.rightTitle {
  font-size: 14px;
  text-align: left;
}
.foodListStyle {
  list-style: none;
}
.foodStyle {
  font-size: 12px;
  text-align: left;
}
.rightList{
  flex:1;
  height:960px;
}
</style>
