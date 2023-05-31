<template>
  <div class="common-layout">
    <el-container>
      <el-aside >
        <el-menu default-active="2" class="el-menu-vertical-demo " 
        background-color="#545c64"  
        text-color="#fff"
    >
        <el-sub-menu :index="item.label" v-for="item in hasChildren()" :key="item.path">
          <template #title>
            <!-- <component class="icons" :is="item.icon"> </component>  -->
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item-group >
            <el-menu-item :index="subItem.index" v-for="(subItem,subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">
                <component class="icons" :is="subItem.icon"> </component>
                <span>{{ subItem.label }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      
      </el-menu>
      </el-aside>
      <el-main><router-view /></el-main>
    </el-container>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
export default {
  setup(){
        const router=useRouter()
        const store=useStore()
        const list=[
          {path:'/array',name:'array',label:'综合概览（阵列区）',icon:'home-filled',url:'home/Array',
            children:[
            {path:'/array1',name:'array1',label:'1#光伏阵列区',icon:'home-filled',url:'home/arrays/Array1'},
            {path:'/array2',name:'array2',label:'2#光伏阵列区',icon:'home-filled',url:'home/arrays/Array2'},
            {path:'/array3',name:'array3',label:'3#光伏阵列区',icon:'home-filled',url:'home/arrays/Array3'},
            {path:'/array4',name:'array4',label:'4#光伏阵列区',icon:'home-filled',url:'home/arrays/Array4'},
            ]
          }
        ]
        const hasChildren=()=>{
            return list.filter((item)=>item.children)
        }
        const clickMenu=(item)=>{
            router.push({
                name:item.name,
            })
            //vuex 来管理
            store.commit('selectMenu',item)
          }
          return{
            clickMenu,hasChildren
          }
  }
}
</script>

<style lang="less" scoped>
.common-layout{
  width: 80%;
  margin: 0 auto;
  .el-aside{
  //background-color: pink;
  width: 200px;  
  height: 1070px;
  .el-menu{
    height: 1070px;
    .icons{
      width: 20px;
    }
  }
}
.el-main{
  //background-color: skyblue;
  border: 2px solid #999;
  height: 1070px;
}
}

</style>