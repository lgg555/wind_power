<template>
  <el-header class="header">
    <div class="l-container">
        <!-- 折叠图标 -->
    <el-button size="small" @click="handleCollapse">
            <el-icon size="20"><Menu /></el-icon>
    </el-button>
    <el-breadcrumb separator="/" class="bread" >
            <!-- 首页是一定存在的直接写死 -->
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to=" current.path" v-if="current">{{current.label}}</el-breadcrumb-item>
    </el-breadcrumb>
    </div>

    <div class="r-container">
        <!-- 头像、下拉表单等 -->
        <el-dropdown>
    <span class="el-dropdown-link">
      <img :src="getImgSrc('head')" alt="" class="user">
      
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="toHome">个人中心</el-dropdown-item>
        <el-dropdown-item @click="toLogin">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import { computed } from 'vue'
import { defineComponent } from 'vue';
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {postUserLogOut} from '../api/api.js'
import axios from 'axios'
export default defineComponent({
    setup(){
        const getImgSrc=(head)=>{
            return new URL(`../../public/${head}.jpg`,import.meta.url).href;//import.meta.url是基准路径base
        }
        let store=useStore()
        let handleCollapse=()=>{
          //vuex中的mutations
          store.commit('updateIsCollapse')
        }
        let router=useRouter()
        const toHome=()=>{
          router.push('/home')
        }
        const toLogin=async()=>{
          let res=await postUserLogOut()
          console.log(res);
          localStorage.removeItem('token')
          router.push('/login')
        }
        /*  console.log(1);
            console.log(res);
            */
        const current=computed(()=>{
                return store.state.currentMenu
            })
        return{
        getImgSrc,handleCollapse,toHome,toLogin,current
    }
    },
    
})
</script>

<style lang="less" scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items:center ;
    width: 100%;
    background: #333;
}
.r-container{
    .user{
        width: 40px;
        height: 40px;
        border-radius: 20px;
        cursor: pointer;
    }
}
.l-container{
  display: flex;
  align-items: center;
  justify-content: center;
  .bread /deep/ span {
  color: #fff;
  cursor: pointer;
  }
  .el-button{
    margin-right: 20px;
  }
 
}
</style>