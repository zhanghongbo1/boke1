<template>
  <div class="msg">
      <bq/>
    <!-- <el-form>
      <el-form-item label="留言发表">
        <el-input type="textarea" v-model="form.desc" maxlength="100"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" style="margin-top:.1rem" class="btn">发表</el-button> -->
  </div>
</template>

<script>
import bq from '../components/bq'
export default {
     components:{bq},
  data() {
   
    return {
      form: {
        desc: ""
      },
      disabled:false,   //控制表情弹框
		curEmoji:'', 
    };
  },
  methods:{

}

};
</script>
<style lang="scss">
.msg {
height: 100%;
}
</style>