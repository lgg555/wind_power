<template>
  <div id="searchbox_container">
    <el-checkbox v-model="checked" label="热力图展示" size="large" @click="send" />
  </div>
</template>

<script>
import bus from '../utils/index.js'
export default {
    data(){
        return{
            checked:false
        }
    },
    methods:{
      send(){
        bus.emit('shareHeatMapChecked',this.checked)
       // console.log(this.checked);
      }
    }
}
</script>

<style lang="less" scoped>
#searchbox_container{
    width: 100%;
    height: 100%;
    position: relative;
}
</style>