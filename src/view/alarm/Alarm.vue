<template>
  <div class="goods">
  <!-- 搜索区域 -->
    <div class="header">
      <!-- 工单类型 紧急程度 工单状态 工单接收人 -->
      <ul class="select">
        <li>
          <span>工单类型:</span>
          <el-select v-model="typeValue" class="m-2" placeholder="全部" >
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        </li>
        <li>
          <span>紧急程度:</span>
          <el-select v-model="levelValue" class="m-2" placeholder="全部" >
          <el-option
            v-for="item in levelOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        </li>
        <li>
          <span>工单状态:</span>
          <el-select v-model="statusValue" class="m-2" placeholder="全部" >
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        </li>
        <li>
          <span>工单接收人:</span>
          <el-select v-model="receiverValue" class="m-2" placeholder="全部" >
          <el-option
            v-for="item in receiverOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        </li>
        
      </ul>
      <div id="found">
         <!-- <el-input-number v-model="inputIndex" :min="0" :max="200" @change="handleChange" /> -->
      <el-input class="input_container" v-model="inputNum" placeholder="请输入工单单号查询数据" />
      <el-button type="primary"  >查询</el-button>
      <el-button type="primary" >新建</el-button>
      </div>
     
    </div>
      <!-- 表格区域 -->
    <div class="table">
      <el-table :data="tableData"  style="height:480px">
      <!-- <el-table-column type="selection" width="55" /> -->
       <el-table-column v-for="item in tableLabel" :key="item.prop" :label="item.label" :prop="item.prop" :width="item.width?item.width:150"/>
       <!-- 操作 -->
    <el-table-column prop="address" label="操作" >
      
      <el-button size="small" type="danger"  >下发工单</el-button>
        </el-table-column>
  </el-table>
   
    </div>
     <!-- 分页区域 -->
    <div class="page">
      <el-pagination background layout="prev, pager, next,jumper" :total="1000" />
    </div>
    <!-- form表单 -->
   
    <!-- <el-dialog :model-value ="dialogVisible" :title="dialogTitle"   width="40%"  @close="handleCloseDialog">
    <el-form ref="formRef" :model="form" label-width="70px">
    <el-form-item label="编号" prop="index">
      <el-input v-model="form.index" />
    </el-form-item>
    <el-form-item label="姓名" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model="form.age" />
    </el-form-item>
    <el-form-item label="性别" prop="sexLabel">
      <el-input v-model="form.sexLabel" />
    </el-form-item>
    <el-form-item label="出生日期" prop="birth">
      <el-input v-model="form.birth" />
    </el-form-item>
    <el-form-item label="地址" prop="addr">
      <el-input v-model="form.addr" />
    </el-form-item>
  </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCloseDialog">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确定</el-button>
          
        
      </span>
    </template>
  </el-dialog> -->
</div>
</template>

<script>
export default {
  data(){
    return{
      tableLabel:[
        {prop:"num",label:"告警等级"},
        {prop:"level",label:"告警类型"},
        {prop:"type",label:"告警来源"},
        {prop:"location",label:"告警位置",width:240},
        {prop:"time",label:"位置类型",width:200},
        {prop:"receiver",label:"告警次数"},
        {prop:"status",label:"工单状态"},
      ],
      tableData:[
      {
        "num": '2021090811',
        "level": "低",
        "type": "缺陷",
        "location": "03#阵列区-逆变器02-汇流箱03",
        "time": '2021-03-19 22:24:24',
        "receiver": "吴签",
        "status": '待处理'
      },
      {
        "num": '2021090812',
        "level": "中",
        "type": "故障",
        "location": "03#阵列区-逆变器02-汇流箱03",
        "time": '2021-03-19 22:24:24',
        "receiver": "张三",
        "status": '处理中'
      },
      {
        "num": '2021090813',
        "level": "高",
        "type": "隐患",
        "location": "03#阵列区-逆变器02-汇流箱03",
        "time": '2021-03-19 22:24:24',
        "receiver": "李四",
        "status": '已处理'
      },
      {
        "num": '2021090814',
        "level": "低",
        "type": "低效",
        "location": "03#阵列区-逆变器02-汇流箱03",
        "time": '2021-03-19 22:24:24',
        "receiver": "王五",
        "status": '已完成'
      },
      {
        "num": '2021090815',
        "level": "紧急",
        "type": "缺陷",
        "location": "03#阵列区-逆变器02-汇流箱03",
        "time": '2021-03-19 22:24:24',
        "receiver": "赵六",
        "status": '待处理'
      },
      ],
      inputNum:null,
      typeOptions : [
          {
            value: 'Option1',
            label: '全部',
          },
          {
            value: 'Option2',
            label: '缺陷',
          },
          {
            value: 'Option3',
            label: '故障',
          },
          {
            value: 'Option4',
            label: '隐患',
          },
          {
            value: 'Option5',
            label: '低效',
          },
        ],
      typeValue:null,
      levelOptions : [
          {
            value: 'Option1',
            label: '全部',
          },
          {
            value: 'Option2',
            label: '低',
          },
          {
            value: 'Option3',
            label: '中',
          },
          {
            value: 'Option4',
            label: '高',
          },
          {
            value: 'Option5',
            label: '紧急',
          },
        ],
      levelValue:null,
      
      statusOptions : [
          {
            value: 'Option1',
            label: '全部',
          },
          {
            value: 'Option2',
            label: '待处理',
          },
          {
            value: 'Option3',
            label: '处理中',
          },
          {
            value: 'Option4',
            label: '已处理',
          },
          {
            value: 'Option5',
            label: '已完成',
          },
        ],
      statusValue:null,
      receiverOptions : [
          {
            value: 'Option1',
            label: '全部',
          },
          {
            value: 'Option2',
            label: '张三',
          },
          {
            value: 'Option3',
            label: '李四',
          },
          {
            value: 'Option4',
            label: '王五',
          },
          {
            value: 'Option5',
            label: '赵六',
          },
        ],
      receiverValue:null,
    }
  }
}
</script>

<style lang="less" scoped>
 .goods{
  margin: 20px;
 // background-color: burlywood;
 .header{
 // display: flex;
  width: 80%;
  margin: 50px auto;
  //background-color: pink;
  .select{
    display: flex;
    width: 80%;
    //background-color: #fff;
    margin: 0 auto;
    li{
      display: flex;
      margin: 50px 30px;
      align-items: center;
    }
  }
  #found{
    display: flex;
    width: 30%;
    margin: 0 auto;
    .input_container{
    width: 200px;
  }
  button{
    margin-left: 20px;
  }
  }
  
 }
 .table{
  margin: 20px auto;
  width: 60%;
 }
 .page{
  width: 30%;
  //background-color: skyblue;
  display: flex;
  margin: 100px auto;
 }
}
</style>