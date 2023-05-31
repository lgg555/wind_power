<template>
  <div class="search">
    <el-input placeholder="请输入要查询的位置" v-model.trim="input" :id="search_id"></el-input>
    <el-button type="primary"  @click="sendMsg">搜索</el-button>
  </div>

</template>

<script>
import bus from '../utils/index.js'
export default {
    data() {
    return {
      search_id: 'searchId',
      input: ''
    }
  },

  methods: {
    sendMsg() {
      bus.emit('share', this.input)
     // console.log(this.input);
    },
    sendId() {
      bus.emit('share_id', this.search_id)
      //console.log(this.search_id);
    }
  },
  mounted() {
    this.sendId()
  }

}
</script>

<style lang="less" scoped>
// lessc
.search{
   display: flex;
   //justify-content: center;
   height: 100%;
   width: 100%;
   padding-right: 20px;
   .el-input{
    width: 400px;
   }
}
</style>