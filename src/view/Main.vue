<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <common-aside />
      <el-container class="r-container">  
        <common-header />
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import { defineComponent } from 'vue';
import CommonHeader from '../components/CommonHeader.vue'
import CommonAside from '../components/CommonAside.vue'
import CommonTab from '../components/CommonTab.vue'
export default defineComponent({
  components:{
    CommonHeader,CommonAside,CommonTab
  },
})


</script>

<style lang="less" scoped>

.common-layout{
  height: 100%;
  
  & >.lay-container{
    height: 100%;
   
    & >.el-aside{
      background: #545c64;
      height: 100%;
    }
  }
}
.r-container{
  flex-wrap: wrap;
  align-items: flex-start;
}

</style>