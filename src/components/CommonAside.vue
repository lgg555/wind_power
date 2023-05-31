<template>
 <el-aside :width="$store.state.isCollapse? '180px':'64px'" >
    <el-menu default-active="2" class="el-menu-vertical-demo " 
         background-color="#545c64"  
        text-color="#fff"
        :collapse="!$store.state.isCollapse"
    >
        <el-menu-item :index="item.label" v-for="item in noChildren()" :key="item.path" @click="clickMenu(item)">
            <!-- 动态引入icon -->
            <component class="icons" :is="item.icon"> </component>
            <span>{{ item.label }}</span>
        </el-menu-item>

        <el-sub-menu :index="item.label" v-for="item in hasChildren()" :key="item.path">
          <template #title>
            <component class="icons" :is="item.icon"> </component>
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
</template>

<script>
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
export default {
    setup(){
        const router=useRouter()
        const store=useStore()
        //定义左侧菜单
        const list=[
            
            {path:'/map',name:'map',label:'地图',icon:'map-location',url:'map/Map'},
            {label:'智能监测',icon:'location',path:'/supervise',children:[
            {path:'/home',name:'home',label:'综合概览（全站）',icon:'home-filled',url:'home/Home'},
            {path:'/array',name:'array',label:'综合概览（阵列区）',icon:'home-filled',url:'home/Array'},
            ]},
            
            {label:'设备监测',icon:'location',path:'/supervise',children:[
                {path:'/page1',name:'page1',label:'箱变监测',icon:'setting',url:'supervise/Page1'},
                {path:'/page2',name:'page2',label:'汇流箱监测',icon:'setting',url:'supervise/Page2'},
                {path:'/page3',name:'page3',label:'逆变器监测',icon:'setting',url:'supervise/Page3'},
                {path:'/page4',name:'page4',label:'组串监测',icon:'setting',url:'supervise/Page4'},
            ]},
            {label:'告警中心',icon:'location',path:'/alarm',children:[
                {path:'/alarm',name:'alarm',label:'实时告警',icon:'setting',url:'alarm/Alarm'},
                {path:'/prealarm',name:'prealarm',label:'历史告警',icon:'setting',url:'alarm/PreAlarm'},
            ]},
            {label:'工单管理',icon:'location',path:'/workorder',children:[
                {path:'/workorder',name:'workorder',label:'我的工单',icon:'setting',url:'workorder/WorkOrder'},
                
            ]},
        ];
        const noChildren=()=>{
            return list.filter((item)=>!item.children)
        }
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
            noChildren,hasChildren,clickMenu
        }
    }
}
</script>

<style lang="less" scoped>

.icons{
    width: 18px;
    height: 18px;
    margin-right: 5px;
}
.el-menu{
    border-right: none;
}
</style>