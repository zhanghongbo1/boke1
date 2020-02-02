<template>
  <div id="app">
   <div id="particles"></div>
   <el-container>
  <el-header>
    <el-button type="primary" v-for="item in list" :key="item.id" @click="go(item)">{{item.name}}</el-button>
  </el-header>
  <el-container>
    <el-aside width="2.4rem">
      <h2>aboutme</h2>
      <p v-for="item in me" :key='item.id'>{{item.name}}</p>
      <div class="QQ">
        <span>QQ:联系我</span>
        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=582074370&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:582074370:52" alt="点击这里给我发消息" title="点击这里给我发消息"/></a>
      </div>
      <div class="weixin">
        <span>微信：</span>
        <img src="./assets/ma.png" alt="">
      </div>
      <div class="gg">
          你懂得
      </div>
     
     
    </el-aside>
    <el-main>
      <keep-alive>
       <router-view/>
      </keep-alive>
      

    </el-main>
  </el-container>
</el-container>
   
  </div>
</template>
<script>
import particlesJs from "particles.js";
import particles from './components/particles.json'
import axios from 'axios'
export default {

    data() {
      return {
        list:[
          {id:1,name:"首页",path:"home" },
          {id:2,name:"网站开发",path:"web" },
          {id:3,name:"技术分享",path:"technology" },
          {id:4,name:"给我留言",path:"mes" },
          {id:5,name:"关于我",path:"aboutme" },
          {id:6,name:"合作",path:"cooperation" },
        ],
        me:[
          {id:1,name:"姓名：MR*张"},
          {id:2,name:"职业：前端开发工程师"},
          {id:3,name:"现居：浙江嘉兴"},
          {id:4,name:"欢迎来撩0.0"}
          ]
      }
    },
  mounted() {
      particlesJS('particles',particles);
        axios.post("http://localhost:3000/img").then(res => {
        
        // this.list=res.data.PIC
     this.$store.commit("get",res.data.arr)
      console.log(res.data)
    });
  },
  methods: {
    go(item){
      this.$router.push({name:item.path})
    }
  },
}
</script>
<style lang="scss" scoped>
#particles{
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: 	#191970;
      background: url('./assets/3.jpg');
      background-repeat: no-repeat;
      background-size: 100% ;
      background-size: cover;
      background-position: 50% 50%;
      z-index: -1;
}
.el-header{
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.el-button {
  margin: 0 .3rem;
}
h2{
  text-align: center;
  color: white;
}
.el-main{
  padding-right: 2.4rem;
}
.el-aside{
  padding-left: .3rem;
  border: 1px solid #0066FF;
  margin-top: .2rem;
  p{
    font-size: .2rem;
    color: white;
    margin-top: .3rem;
    height: .3rem;
    line-height: .3rem;
  }
  .QQ{
    display: flex;
    margin-top: .3rem;
    align-items: center;
    // justify-content: space-around;
    color: white;
    span{
      font-size: .2rem;
      color: white;
    }
  }
  .weixin{
     margin-top: .3rem;
    display: flex;
    color: white;
    align-items: center;
    img{
      width: 1.2rem;
      height: 1.2rem;
    }
  }
  .gg{
    width: 1.2rem;
    height: 1.2rem;
    line-height: 1.2rem;
    background: url('./assets/gg.jpg') no-repeat ;
    background-size: 100%;
    color: red;
    margin-top: .32rem;
    text-align: center;
  }
}
</style>
