<template>
  <div id="home_container">
    <div class="title">
      <p class="weight">风力发电管理系统</p>
    </div>
    <!-- 次级标题 -->
    <div id="subtitle">
      <div id="subtitlei">
      <span>累计发电</span>
      <ul>
        <li>0</li>
        <li>0</li>
        <li>1</li>
        <li>1</li>
        <li>5</li>
        <li>6</li>
      </ul>
      <span>万MWh</span>
    </div>
      <div id="subtitleii">
        <span>累计CO2减排</span>
      <ul>
        <li>6</li>
        <li>2</li>
        <li>0</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
      </ul>
      <span>万吨</span>
      </div>
      <!-- 日期与天气 -->
      <div id="subtitleiii">
        <now-time />
      </div>
      <div id="subtitleiiii">
        <img src="../../../public/天气.png" alt="">
      </div>
    </div>
    
   
    <!-- 首页主体部分 -->
    <div id="main">
      <!-- 设备工况统计 -->
      <div id="machinework">
        <p>设备工况统计</p>
        <hr>
        <div id="piechart">
          <div class="machine">
            <e-charts class="chart" :option="option1"  />
            <span>正常设备</span>
            <p>30/35</p>
          </div>
          <div class="machine">
            <e-charts class="chart" :option="option2"  />
            <span>离线设备</span>
            <p>5/35</p>
          </div>
          <div class="machine">
            <e-charts class="chart" :option="option3"  />
            <span>告警设备</span>
            <p>3/35</p>
          </div>                            
        </div>
      </div>
      <!-- 预警趋势分析 -->
      <div id="ringtrend">
        <div class="ringheader">
          <p>告警趋势分析</p>
         <!--  <el-button type="default" plain class="buttonri">日</el-button>
          <el-button type="default" plain class="buttonyue">月</el-button> -->
          <!-- 先显示月的 -->
        </div>
        <hr>
        <e-charts class="chart" :option="option4"  />
      </div>
      <!-- 运维管理分析 -->
      <div id="workmanage">
        <div class="manageheader">
          <p>运维管理分析</p>
         <!--  <el-button type="default" plain class="buttonyue">月</el-button>
          <el-button type="default" plain class="buttonnian">年</el-button> -->
          
        </div>
        <hr>
        <div class="managemain">
          <span>工单准时完成率</span>
          <!-- <el-slider v-model="value1" class="slider" /> -->
          <progress-bar :value="this.value1" class="slider" />
          <span class="successrate">{{this.value1}}%</span>         
        </div>
        <div id="chart">
          <e-charts class="chart" :option="option5"  />
        </div>
        <div class="chartexplain">
          <img src="../../../public/piechartexplain.png" alt="">
        </div>
      </div>
      <!-- 电站健康度分析 -->
      <div id="powerhealth">
          <p class="title">电站健康度分析</p>
          <hr>
          <div id="progressbar">
            <span>能效PR</span>
            <progress-bar :value="this.value2" class="slider" />
            <span class="healthrate">{{ this.value2 }}%</span>
          </div>
        <div id="dashboard">
          <dash-board :percentage="this.value2" />
        </div>
        <div id="healthrate">
          <e-charts class="chart" :option="option6"  />
        </div>
      </div>
      <!-- 发电量排名 -->
      <div id="makepower">
        <div class="header">
          <p>发电量排名</p>
         <!--  <el-button type="default" plain class="buttonri">日</el-button>
          <el-button type="default" plain class="buttonyue">月</el-button> -->
          <!-- 先显示月的 -->
        </div>
        <hr>
        <e-charts class="chart" :option="option7"  />
      </div>
      <!-- 地图控件 -->
      <div id="map">
        <map-container />
      </div>
 
    </div>
  </div>
</template>

<script>
import DashBoard from '../../components/DashBoard.vue'
import ProgressBar from '../../components/ProgressBar.vue'
import NowTime from '../../components/NowTime.vue'
import MapContainer from '../../components/MapContainer.vue'
import {getAlarmlistData} from '../../api/api.js'
import MapContainerVue from '../../components/MapContainer.vue'

export default {
  components: { DashBoard ,ProgressBar,NowTime,MapContainer},
  data(){
    return{
      data1:this.getRandomData1(),
      value1:35.1,
      value2:83,
     
      option1:{
        title: {
            text: '86%',
            left: 'center',
            top: 'center'
          },
          tooltip: {
            trigger: 'item'
          },//控制标志的显示
          color:['#18e470','gray'],
          series: [
            {
              type: 'pie',
              radius: ['50%', '70%'],
              label: {
                show: false,
                position: 'left'
              },
              emphasis: {
                label: {
                  show: false,
                  fontSize: 40,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 30, name: '正常设备' },
                { value: 5, name: '离线设备' },           
              ]
            }
          ]
   },
      option2:{
        title: {
            text: '14%',
            left: 'center',
            top: 'center'
          },
        tooltip: {
          trigger: 'item'
        },//控制标志的显示
        color:['#c1f210','gray'],
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            label: {
              show: false,
              position: 'left'
            },
            emphasis: {
              label: {
                show: false,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 5, name:  '离线设备'},
              { value: 30, name: '正常工作设备' },           
            ]
          }
        ]
      },
      option3:{
        title: {
            text: '9%',
            left: 'center',
            top: 'center'
          },
        tooltip: {
          trigger: 'item'
        },//控制标志的显示
        color:['red','gray'],
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            label: {
              show: false,
              position: 'left'
            },
            emphasis: {
              label: {
                show: false,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 3, name:  '告警设备'},
              { value: 32, name: '正常工作设备' },           
            ]
          }
        ]
      },
     option5:{
        title: {
            text: '1000条',
            left: 'center',
            top: 'center'
          },
        tooltip: {
          trigger: 'item'
        },//控制标志的显示
        color:['pink','yellow','orange','skyblue'],
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            label: {
              show: false,
              position: 'left'
            },
            emphasis: {
              label: {
                show: false,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 170, name:  '待处理工单'},
              { value: 230, name: '处理中工单' },     
              { value: 150, name:  '已处理工单'},
              { value: 450, name: '已关闭工单' },        
            ]
          }
        ]
      },
      option6: {
        color: ['#5470C6',  '#EE6666'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          right: '20%'
        },
        toolbox: {
          feature: {
            //dataView: { show: true, readOnly: false },  读取数据
            //restore: { show: true },  重置
            //saveAsImage: { show: false } 下载
          }
        },
        legend: {
          data: ['健康度HI', '能效PR', ]
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            // prettier-ignore
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '健康度HI',
            position: 'right',
            alignTicks: true,
            axisLine: {
              show: true,
            },
            axisLabel: {
              formatter: '{value} %'
            }
          },
          {
            type: 'value',
            name: '能效PR',
            position: 'left',
            alignTicks: true,
            axisLine: {
              show: true,
            },
            axisLabel: {
              formatter: '{value} %' 
            }//单位刻度
          }
        ],
        series: [
          {
            name: '健康度HI',
            type: 'bar',
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 56.3, 62.2, 32.6, 20.0, 6.4, 3.3
            ]
          },
          {
            name: '能效PR',
            type: 'line',
            yAxisIndex: 1,
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3
            ]
          },
        ]
      },
      option7: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
          type: 'shadow'
            }
          },
        
              // 位置
              grid: { 
                left: '3%',
                top: '8%',
                right: '3%',
                bottom: '18%',
                containLabel: true
              },
        xAxis: {
          type: 'value',
          axisLabel: {
            show: false // 不显示x轴标签
          },
          axisLine: {
            // x轴线的颜色以及宽度
            show: true,
            lineStyle: {color: 'rgba(255,255,255,0.1)'}
            },
          axisTick: {
            show: false // x轴刻度线
          },
          splitLine: { // x轴网格线
            show: true,
              lineStyle: {color: 'rgba(255,255,255,0.1)'}
            }
          },
          yAxis: {
            type: 'category',
            inverse: true,//升序
            axisTick: { show: true }, // y轴刻度线
            axisLabel: { color: '#000' }, // y轴文字的配置
            axisLine: {
              //x轴线的颜色
              show: true,
              lineStyle: {color: 'rgba(255,255,255,0.1)'}
            },
            data: ['阵列区01','阵列区02','阵列区03','阵列区04','阵列区05','阵列区06','阵列区07','阵列区08',]
          },
          series: [
            {
            name: '人数',
            type: 'bar',
            stack: '总量',
            realtimeSort: true,//排序 要降序现在是升序
            label: {
              normal: {
                show: true,
                position: 'inside', //显示在柱子内部
                textStyle: { color: '#fff' },
                formatter: '{c}kWh' //单位
              }
            },
            itemStyle: {
              color: {
                  colorStops:[ //柱子的渐变色
                      {
                        offset: 0,
                        color: '#235C8A' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: 'skyblue' // 100% 处的颜色
                      }
                        ],
              global: false
              }
            },
            barWidth: 20, //柱子的宽度
            data: [53,65,48,56,84,15,18,45]
            }
        ]
      }

    }
  },
  
  computed:{
    option4(){
   return{
           /* title:{
             text:'告警趋势分析'
           }, */
           //这里不用标题
           tooltip: {
             trigger: 'item'
           },//鼠标经过显示
           xAxis: {
             type: 'category',
             name:'月份',
             data: this.data1.map(d=>d.name)
           },
           yAxis: {
             name:'告警次数',
             type: 'value'
           },
           series: [
             {
               data: this.data1.map(d=>d.val),
               type: 'line'
             }
           ]
         }
 },

  },
  methods:{
    getRandomData1(){
   return[
    {val:Math.random()*100,name:1},
    {val:Math.random()*100,name:2},
    {val:Math.random()*100,name:3},
    {val:Math.random()*100,name:4},
    {val:Math.random()*100,name:5},
    {val:Math.random()*100,name:6},
    {val:Math.random()*100,name:7},
    {val:Math.random()*100,name:8},
    {val:Math.random()*100,name:9},
    {val:Math.random()*100,name:10},
    {val:Math.random()*100,name:11},
    {val:Math.random()*100,name:12},
    
    ]
    },
     getAlarmlist(){
      getAlarmlistData({}).then(
        res=>{
        console.log(res);
      })
     }
    },
  created(){
       setInterval(()=>{
         this.data1=this.getRandomData1()
        },3000);
  
  // this.getAlarmlist()
  },
 
}
</script>

<style lang="less" scoped>
#home_container{
  .title{
    p{
      text-align: center;
      font-weight: 900;
      font-size: 36px; 
    }
  }
  #subtitle{
    display: flex;
    align-items: center;
    #subtitlei{
    display: flex;
    align-items: center;
    margin-right: 40px;
    margin-left: 150px;
    ul{
      li{
        
        display: inline-block;
        font-size: 20px;
        font-weight: 700;
        color: #fff;
        margin-left: 5px;
        margin-right: 5px;
        text-align: center;
        width: 20px;
        line-height: 30px;
        height: 30px;
        background-color: orange;
      }
    }
  }
  #subtitleii{
    display: flex;
    align-items: center;
    ul{
      li{
        
        display: inline-block;
        font-size: 20px;
        font-weight: 700;
        color: #fff;
        margin-left: 5px;
        margin-right: 5px;
        text-align: center;
        width: 20px;
        line-height: 30px;
        height: 30px;
        background-color: rgb(15, 218, 29);
      }
    }
  }
  #subtitleiii{
    margin-left: 700px;
    width: 300px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    //background-color: pink;
  }
  #subtitleiiii{
    margin-left: 50px;
  }
  }
  #main{
    position: relative;
    width: 100%;
    height: 1000px;
    //background: linear-gradient(to right,rgb(87,74,74),rgb(43,108,134));
    #map{
      position: absolute;
      left: 700px;
      top: 50px;
      width: 700px;
      height: 500px;
      border: 1px solid #999;
    }
    #machinework{
      position: absolute;
      left: 50px;
      top: 50px;
      width: 600px;
      height: 350px;
      border: 1px solid #999;
      margin-top:10px;
      text-align: center;
      p{
        height: 30px;
        line-height: 40px;
        font-weight: 900;
      }
      #piechart{
        width: 100%;
        .machine{
          float: left;
          margin-left: 30px;
          margin-top: 20px;
          .chart{
          width: 150px;
          height: 180px;          
        }
        p{
          font-weight: 500;
        }
        }
       
      }
    }
    #ringtrend{
      position: absolute;
      left: 1450px;
      top: 50px;
      width: 600px;
      height: 350px;
      border: 1px solid #999;
      margin-top:10px;
      //text-align: center;
      .ringheader{
        height: 30px;
        line-height: 40px;
        position: relative;
        p{
         text-align: center;
          font-weight: 900;
        }
        .buttonri{
          position: absolute;
          right: 80px;
          top: 5px;
        }
        .buttonyue{
          position: absolute;
          right: 30px;
          top: 5px;
        }
      }

    }
    #workmanage{
      position: absolute;
      left: 750px;
      top: 600px;
      width: 600px;
      height: 350px;
      border: 1px solid #999;
      margin-top:10px;
      .manageheader{
        height: 30px;
        line-height: 40px;
        position: relative;
        p{
        text-align: center;
          font-weight: 900;
        }
        .buttonyue{
          position: absolute;
          right: 80px;
          top: 5px;
        }
        .buttonnian{
          position: absolute;
          right: 30px;
          top: 5px;
        }
      }
      .managemain{
        display: flex;
        align-items: center;
        span{
          margin-left: 20px;
          margin-right: 20px;
        }
        .slider{
          width: 200px;
        }
        .successrate{
          color: rgb(59, 123, 206);
          font-weight: 700;
          margin-left: 50px;
        }
       
      }
      #chart{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 200px;
        height: 200px;
        }
      .chartexplain{
          position: absolute;
          right: 100px;
          bottom: 20px;
      }
    }
    #powerhealth{
      position: absolute;
      left: 1450px;
      top: 550px;
      width: 600px;
      height: 400px;
      border: 1px solid #999;
      margin-top:10px;
      p{
        text-align: center;
        height: 30px;
        line-height: 40px;
      }
      #progressbar{
        display: flex;
        align-items: center;
        span{
          margin-left: 20px;
          margin-right: 40px;
        }
        .healthrate{
          color: purple;
          margin-left: 50px;
          font-weight: 700;
        }
        .slider{
          width: 300px;
        }
      }
      #dashboard{
        position: absolute;
        left: 20px;
        bottom: 30px;
        width: 200px;
        height: 200px;
      }
      #healthrate{
        position: absolute;
        right: 10px;
        bottom: -10px;
        width: 350px;
        height: 250px;
      }
    }
    #makepower{
      position: absolute;
      left: 50px;
      top: 550px;
      width: 600px;
      height: 400px;
      border: 1px solid #999;
      margin-top:10px;
      .header{
        height: 30px;
        line-height: 40px;
        position: relative;
        p{
          text-align: center;
          font-weight: 900;
        }
        .buttonri{
          position: absolute;
          right: 80px;
          top: 5px;
        }
        .buttonyue{
          position: absolute;
          right: 30px;
          top: 5px;
        }
      }
    }
    #lightarea{
      position: absolute;
      left: 1450px;
      top: 400px;
      width: 600px;
      height: 300px;
      border: 1px solid #999;
      margin-top:10px;
      p{
        position: absolute;
        left: 0;
        top: -40px;
        font-weight: 900;
        font-size: 28px;
      }
      #lightarea_header{
        display: flex;
        justify-content:space-between;
        margin-left: 25px;
        width: 550px;
        height: 30px;
        line-height: 40px;
        font-size: 20px;
      }
      #lightarea_main{
        width: 600px;
        ul{
          li{
            float: left;
            display: flex;
            align-items: center;
            width: 220px;
            height: 50px;
            margin: 15px 35px;
           
            span{
              font-size: 18px;
            }
            .data1{
              color:skyblue;
              font-weight: 700;
              font-size: 22px;
              margin: 0 10px;
            }
          }
        }
      }
    }
    #nowpower{
      position: absolute;
      left: 100px;
      bottom: 20px;
      width: 300px;
      height: 200px;
      border: 1px solid #999;
      p{
        position: absolute;
        right: 10px;
        top: -8px;
        background-color: #eee;
      }
      ul{
        margin-top: 30px;
        
        li{
          margin-left: 20px;
          margin-bottom: 20px;
        }
      }
    }
    #nowelec{
      position: absolute;
      left: 580px;
      bottom: 20px;
      width: 300px;
      height: 200px;
      border: 1px solid #999;
      p{
        position: absolute;
        right: 10px;
        top: -8px;
        background-color: #eee;
      }
      ul{
        margin-top: 30px;
        
        li{
          margin-left: 20px;
          margin-bottom: 20px;
        }
      }
    }
    #nowring{
      position: absolute;
      left: 1110px;
      bottom: 20px;
      width: 300px;
      height: 200px;
      border: 1px solid #999;
      p{
        position: absolute;
        right: 10px;
        top: -8px;
        background-color: #eee;
      }
      ul{
        margin-top: 30px;
        
        li{
          margin-left: 60px;
          margin-bottom: 20px;
        }
      }
    }
    #dangerring{
      position: absolute;
      left: 1640px;
      bottom: 20px;
      width: 300px;
      height: 200px;
      border: 1px solid #999;
      p{
        position: absolute;
        right: 10px;
        top: -8px;
        background-color: #eee;
      }
      ul{
        margin-top: 30px;
        
        li{
          margin-left: 60px;
          margin-bottom: 20px;
        }
      }
    }
    .data2{
      color: skyblue;
      font-weight: 700;
      font-size: 40px;
      margin-left: 40px;
      margin-right: 10px;
    }
    .data3{
      color: orange;
      margin-left: 30px;
      margin-right: 30px;
    }
  }
}
</style>