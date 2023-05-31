<template>
  <div class="bigbox">
        <form action="" class="login">
            <h1>login</h1>
            <!-- <img src="../../../public/user.png" alt=""> -->
            <el-icon class="icon" size="40"><User /></el-icon>
            <input type="text" placeholder="请输入用户名"  v-model.trim="username">
            <!-- <img src="../../../public/lock.png" alt=""> -->
            <el-icon class="icon" size="40"><Lock /></el-icon>
            <input type="password" placeholder="请输入密码"  v-model.trim="password">
            <input type="submit" class="btn" value="注册" @click="toRegister">
            <input type="submit" class="btn" value="登录" @click="toMain">
        </form>
    </div>
</template>

<script> 
import axios from 'axios'
 export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    toRegister() {
      this.$router.push('/register')
      },
      toMain(){
        axios.post('http://lab.inhust.top:55502/pvs/user/login',
          {
          username:this.username,
          password: this.password,
          }) .then((res) => {
        //console.log('数据：', res);
        //console.log(res.data.code);
        if(res.data.code==20000&&res.data.data.token){
          this.$message.success('登录成功！')
          localStorage.setItem('token',res.data.data.token)
          this.$router.push('/map')
          //console.log(res.data.data.token);
        }

      })
        
        
      }
    },
   
  }
 
</script>

<style lang="less" scoped>
*{
    user-select: none;
    /* 无法选中,整体感更强 */
   
}
.bigbox{
    height: 100vh;
   //height: 100%;
    /* 设置背景 */
    background-image: url(../../../public/bg.png);
    /* 平铺 */
    background-repeat: no-repeat;
    /* 按照屏幕大小计算尺寸 */
    background-size: cover;
    /* fixed */
    background-attachment: fixed;
    .login{
      /* 绝对定位 */
    position: absolute;
    /* 设置位置 距离顶部50% 外边框-200px 距离左边50% */
    top: 50%;
    margin-top: -200px;
    left: 50%;
    /* form表单宽度400px 这里回200px */
    margin-left: -200px;
    width: 400px;
    height: 400px;
    /* 边框锐度 */
    border-radius: 25px;
    background-color: #00000098;
    /* 居中 */
    text-align: center;
    padding: 5px 40px;
    /* 标准盒子 */
    box-sizing: border-box;
    /* 阴影 */
    box-shadow: 5px 10px 5px #161616a8;
    h1{
    /* 引入字体 */
    font-family: "微软雅黑";
    color: white;
    font-weight: 900;
    font-size: 25px;
    margin:30px 0 ;
}
input{
    /* 设置背景颜色 */
    background-color: rgba(255, 255, 255, 0);
    /* 设置宽度高度 */
    width: 80%;
    height: 48px;
    /* 设置底部距离 */
    margin-bottom: 10px;
    /* 边框设置为0 然后给底部边框设置宽度和颜色 */
    border: 0px;
    border-bottom: 2px solid silver;
    /* 点击白色的去除 */
    outline: none;
    /* 字体大小和颜色改变 */
    font-size: 22px;
    color: white;
}
.icon{
    /* 设置大小然后定位 */
    width: 32px;
    /* 相对定位 */
    position: relative;
    top: 15px;
    margin-right: 10px;
    color: #fff;
}
.btn{
    /* 设置宽度 设置边框锐度 */
    /* 去除下边框的白色 */
    margin-top: 30px;
    margin-right: 10px;
    border: 0px;
    width: 35%;
    background-image: linear-gradient(120deg,#f6d365 0% ,#fda085 100%);
    border-radius: 25px;
}
/* 当按钮被鼠标触发的时候 */
.btn:hover{
    background-image: linear-gradient(to right,#b4731d 0% ,#f16943 100%);
}
    }
}

</style>
