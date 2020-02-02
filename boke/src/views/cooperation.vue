<template>
  <div>
    <!-- 当前位置
    <p>
      <span @click="toAddress">{{city}}</span>
    </p>  !-->
  
    <!-- <v-distpicker type="mobile" @selected="selected" v-show="addInp"></v-distpicker> --> 
    <div class="block">
  <span class="demonstration">hover 触发子菜单</span>
  <el-cascader
    v-model="value"
    :options="options"
    :props="{ expandTrigger: 'hover' }"
    @change="handleChange"></el-cascader>
</div>
  </div>
</template>
<script>
import city from '../assets/city.data-3'
  export default {
    data() {
      return {
        value: [],
        options: ""
      };
    },
    mounted() {
        console.log(city)
        this.options=city.cityData3
    
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };

//   import VDistpicker from 'v-distpicker'
//     export default {
//       name: 'HomeHeader',
//       data () {
//         return {
//           //定义data数据
//           city:'全国',
//           addInp :false,
//           mask:false
//         }
//       },
//       components: { 
//             VDistpicker
//        },
//       methods:{
//         //在methodes中定义方法
//        // 点击弹出三级联动
//         toAddress(){
//           console.log(111)
//           this.mask = true;
//           this.addInp = true;
//         },
//         // 省市区三级联动
//         selected(data){
//           this.mask =false;
//           this.addInp = false;
//           // this.city = data.province.value + ' ' + data.city.value +' ' + data.area.value
//           this.city =  data.area.value
//         },
//       }
//     }
</script>
