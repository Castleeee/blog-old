<template>
  <div style="display:flex">
    <div class="pic"><img style="object-fit: cover" :src=this.cover> </img> </div>
    <div class="des" v-html="description"></div>
    <div class="verticalline"></div>
    <div class="rate">
      评分<span style="color: #f6ae32;font-family: 'Adobe Gothic Std';font-size: 35px">{{this.rate}}</span><br/>
      <div style="height: auto"></div>
      <div style="font-size: 10px">开始时间:<br/> {{this.startTime}}</div>
      <div style="font-size: 10px">结束时间:<br/> {{this.endTime}}</div>
      <span style="font-size: 20px">更多资料</span><br/>
      <div v-for="(item,address) in this.more">
        <span><a target="_blank" :href=item>{{ address }}</a></span> <br/>
      </div>
    </div>
  </div>
</template>

<script>
require("../public/js/pgmanor-self")
import axios from 'axios'
export default {
  name: "CourseDisplayCard",
  props: ['id'],
  data: function () {
    return {
      cover: "http://ooowl.fun:5678/s/aspcv9" ,//封面
      description: "none",//描述
      rate: "8.5",// 评分
      startTime: "2000-00-00 00:00:00",// 开始学习时间
      endTime: "2000-00-00 00:00:00",// 学完的时间
      more: { // 更多信息
        "豆瓣": "https://book.douban.com/",
        "b站": "https://www.bilibili.com"
      }
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get('/introduction/'+this.id+'.json').then(response => {
        this.cover=baseUrl+response.data.cover // 图床地址额外配置在/.vuepress/public/js/pgmanor-self
        this.description=response.data.description
        this.rate=response.data.rate
        this.startTime=response.data.startTime
        this.endTime=response.data.endTime
        this.more=response.data.more
        console.log(response.data);
      }, response => {
        console.log("error");
      });
    }
  }
}

</script>

<style scoped>
.pic{
  width: 170px;
  max-height: 300px;
  margin-right: 20px;
}
.des{
  width: 60%;
}
.rate{
  width: 15%;

}

.verticalline{
  margin-left: 20px;
  margin-right: 30px;
  width: 0;
  height: auto;
  opacity: 30%;
  border-left: 1px solid;
  border-color: #2c3e50;
}
</style>
