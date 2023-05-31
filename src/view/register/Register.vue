<template>
  <el-form class="form-container">
    <el-form-item label="username">
      <el-input placeholder="请输入用户名" v-model="username"/>
    </el-form-item>
    <el-form-item label="password">
      <el-input placeholder="请输入密码" v-model="password" />
    </el-form-item>
    <el-form-item label="confirmPwd">
      <el-input placeholder="请确认密码" v-model="confirmPwd" />
    </el-form-item>
    <el-form-item label="number">
      <el-input placeholder="请输入手机号" v-model="number" />
    </el-form-item>
    <el-form-item label="nickname">
      <el-input placeholder="请输入昵称" v-model="nickname" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="toBack">注册</el-button>
      <el-button @click="toLogin">我有账号，去登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script> 
import axios from 'axios'
export default{
    name:'Register',
    data(){
        return{
          username: '',
          password: '',
          confirmPwd:'',
          number:'',
          nickname:'',
        }
    },
    methods:{
        toLogin(){
            this.$router.push('/login')
        },
        toBack(){
         
          axios.post('http://lab.inhust.top:55502/pvs/user/register',
          {
          username:this.username,
          password: this.password,
          confirmPwd:this.confirmPwd,
          number:this.number,
          nickname:this.nickname,
          }) .then((res) => {
        //console.log('数据：', res);
        //console.log(res.data.code);
              this.username=''
              this.password=''
              this.confirmPwd=''
              this.number=''
              this.nickname=''
        if(res.data.code==20000){
          this.$message.success('注册成功！')
          
        }

      })
          
         
        }
    },
    created(){
      
    }
}
</script>

<style lang="less" scoped>


</style>
