<template>
  <div id="array1_container">
    <!-- 顶部6个栏 -->
    <div id="header">
      <ul>
        <li>
          <p>有功功率</p>
          <div class="header_main">
            <span class="bluedata">{{this.havepower}}</span>
            <span>万kW</span>
          </div>
          
        </li>
        <li>
          <p>等效小时数</p>
          <div class="header_main">
            <span class="bluedata">4.73</span>
            <span>h</span>
          </div>
         
        </li>
        <li>
          <p>能效PR</p>
          <div class="header_main">
            <span class="bluedata">{{this.PRdata}}%</span>
          </div>
          
        </li>
        <li>
          <p>日发电量</p>
          <div class="header_main">
            <span class="bluedata">{{this.makepowerperday}}</span>
            <span>万kWh</span>
          </div>
          
        </li>
        <li>
          <p>累计发电量</p>
          <div class="header_main">
            <span class="bluedata">{{this.makepowerall}}</span>
            <span>万kWh</span>
          </div>
          
        </li>
        <li>
          <p>累计CO2减排量</p>
          <div class="header_main">
            <span class="bluedata">189.98</span>
            <span>万吨</span>
          </div>
         
        </li>
      </ul>
    </div>
    <!-- 中间4个栏 -->
    <div id="middle">
      <!-- 电站健康度分析 -->
      <div id="powerhealth">
          <p class="title">电站健康度分析</p>
          <hr>
          <div id="progressbar">
            <span>能效PR</span>
            <progress-bar :value="this.PRdata" class="slider" />
            <span class="healthrate">{{ this.PRdata }}%</span>
          </div>
        <div id="dashboard">
          <dash-board :percentage="86.1" />
          <!-- 这里不能用接口数据 -->
        </div>
        <div id="healthrate">
          <e-charts class="chart" :option="option6"  />
        </div>
      </div>
      <!-- 实时发电功率 -->
      <div id="ringtrend">
        <div class="ringheader">
          <p>实时发电功率</p>
        
        </div>
        <hr>
        <e-charts class="chart" :option="option4"  />
      </div>
      <!-- 发电量统计 -->
      <div id="makepower">
        <div class="powerheader">
          <p>发电量统计</p>
        
        </div>
        <hr>
        <e-charts class="chart" :option="option1"  />
      </div>
      <!-- 能效PR及等小时分析 -->
      <div id="PRhour">
        <div class="PRheader">
          <p>实时发电功率</p>
        
        </div>
        <hr>
        <e-charts class="chart" :option="option2"  />
      </div>
    </div>
    <!-- 下面四个栏 -->
    <div id="footer">
      <ul>
        <li>
          <p>箱变运行状态</p>
          <e-charts class="chart" :option="option7"  />
        </li>
        <li>
          <p>逆变器运行状态</p>
          <e-charts class="chart" :option="option8"  />
        </li>
        <li>
          <p>汇流箱运行状态</p>
          <e-charts class="chart" :option="option9"  />
        </li>
        <li>
          <p>组串运行状态</p>
          <e-charts class="chart" :option="option10"  />
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import DashBoard from '../../../components/DashBoard.vue';
import ProgressBar from '../../../components/ProgressBar.vue';
import {getPvareaData} from '../../../api/api.js'
export default {
  components: { DashBoard ,ProgressBar,},
  data(){
    return{
      PRdata:0,
      havepower:0,
      makepowerall:0,
      makepowerperday:0,
      //箱变1光伏组串2逆变器3汇流箱4
      normal1:0,
      ring1:0,
      leave1:0,
      normal2:0,
      ring2:0,
      leave2:0,
      normal3:0,
      ring3:0,
      leave3:0,
      normal4:0,
      ring4:0,
      leave4:0,
      value2:83,
      option1:{
        title: {
          //text: 'Rainfall vs Evaporation',
          subtext: '万kWh'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['实际发电量', '计划发电量']
        },
        /* toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        }, */
        calculable: true,
        xAxis: [
          {
            type: 'category',
            // prettier-ignore
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '实际发电量',
            type: 'bar',
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
            ],
           /*  markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            }, 
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }*/
          },
          {
            name: '计划发电量',
            type: 'bar',
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
            ],
          /*   markPoint: {
              data: [
                { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            }, */
          
          }
        ]
      },
      option2: {
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
        legend: {
          data: ['能效PR', '等效小时数', ]
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            // prettier-ignore
            data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '能效PR',
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
            name: '等效小时数',
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
            name: '能效PR',
            type: 'bar',
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7,15.4,54.6,58.5, 56.3, 62.2, 32.6, 20.0, 6.4, 3.3
            ]
          },
          {
            name: '等效小时数',
            type: 'line',
            yAxisIndex: 1,
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 15.4,54.6,58.5,82.2, 48.7, 18.8, 6.0, 2.3
            ]
          },
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
      option4:{
   
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
             data: ['10:00','11:00','12:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00',]
           },
           yAxis: {
             name:'功率',
             type: 'value'
           },
           series: [
             {
               data: [12,45,64,15,85,24,54,34,54,45,48,15],
               type: 'line'
             }
           ]
         
      },
      option7: {
        title: {
            text: 4,
            textStyle:{color:'skyblue'},
            
            subtext:'总台数',
            left: 'center',
            top: 'center'
          },
        tooltip: {
          trigger: 'item'
        },
        // 图例
        legend: {
          top: '25%',
          right: '3%',
          icon:'circle',
          orient: 'vertical',//垂直排布
          itemHeight:9,
          itemWidth:9,
          itemGap:25,
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'right'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 4, name: '正常' },
              { value: 0, name: '告警' },
              { value: 0, name: '离线' },
              
            ]
          }
        ]
      },
      option8: {
        title: {
            text: '32',
            textStyle:{color:'skyblue'},
            
            subtext:'总台数',
            left: 'center',
            top: 'center'
          },
        tooltip: {
          trigger: 'item'
        },
        // 图例
        legend: {
          top: '25%',
          right: '3%',
          icon:'circle',
          orient: 'vertical',//垂直排布
          itemHeight:9,
          itemWidth:9,
          itemGap:25,
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'right'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 31, name: '正常' },
              { value: 1, name: '告警' },
              { value: 0, name: '离线' },
              
            ]
          }
        ]
      },
      option9: {
        title: {
            text: '8',
            textStyle:{color:'skyblue'},
            
            subtext:'总台数',
            left: 'center',
            top: 'center'
          },
        tooltip: {
          trigger: 'item'
        },
        // 图例
        legend: {
          top: '25%',
          right: '3%',
          icon:'circle',
          orient: 'vertical',//垂直排布
          itemHeight:9,
          itemWidth:9,
          itemGap:25,
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'right'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 8, name: '正常' },
              { value: 0, name: '告警' },
              { value: 0, name: '离线' },
              
            ]
          }
        ]
      },
      option10: {
        title: {
            text: '32',
            textStyle:{color:'skyblue'},
            
            subtext:'总台数',
            left: 'center',
            top: 'center'
          },
        tooltip: {
          trigger: 'item'
        },
        // 图例
        legend: {
          top: '25%',
          right: '3%',
          icon:'circle',
          orient: 'vertical',//垂直排布
          itemHeight:9,
          itemWidth:9,
          itemGap:25,
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'right'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 31, name: '正常' },
              { value: 1, name: '告警' },
              { value: 0, name: '离线' },
              
            ]
          }
        ]
      },
    }
  },
   methods:{
    //光伏阵列区
    getPvarea(){
      getPvareaData('光伏阵列区2').then(
        res=>{
        console.log(res);
        // console.log(res.告警设备);
        this.PRdata=res.能效PR
        this.makepowerperday=res.日发电量.toFixed(2)
        this.makepowerall=res.总发电量
        this.havepower=res.有功功率
        this.normal1=res.正常设备.箱变0
        this.normal2=res.正常设备.光伏组串0
        this.normal3=res.正常设备.逆变器0
        this.normal4=res.正常设备.汇流箱0
        this.leave1=res.离线设备.箱变2
        this.leave2=res.离线设备.光伏组串2
        this.leave3=res.离线设备.逆变器2
        this.leave4=res.离线设备.汇流箱2
        this.ring1=res.告警设备.箱变1
        this.ring2=res.告警设备.光伏组串1
        this.ring3=res.告警设备.逆变器1
        this.ring4=res.告警设备.汇流箱1
        //console.log(this.ring1,typeof this.ring1);//number
      })
    },

  }, 
  created(){
    //console.log(typeof this.getPvarea);
    this.$nextTick(()=>{
      this.getPvarea()
    })
    
    
    //console.log(typeof getPvareaData); //function
  }
}
</script>

<style lang="less" scoped>
#array1_container{
  #header{
    ul{
      display: flex;
      li{
      display: inline-block;
      width: 250px;
      height: 100px;
      //background-color: pink;
      margin:10px 20px ;
      border: 1px solid #666;
      p{
        color: #fff;
        text-align: center;
        font-size: 18px;
        line-height: 30px;
        background-color: orange;
      }
      .header_main{
        width: 150px;
        height: 50px;
        margin: 10px auto;
        //background-color: pink;
        text-align: center;
        span{
          display: inline-block;
          height: 50px;
          line-height: 50px;
          font-size: 14px;
        }
        .bluedata{
        // margin: 0  20px 0 50px;//上右下左
        margin-right: 20px;
        font-size: 20px;
      }
      }
     
     
    }
    }
  }
  #middle{
    position: relative;
    width: 100%;
    height: 620px;
    //background-color: pink;
    #powerhealth{
      position: absolute;
      left: 100px;
      top: 20px;
      width: 600px;
      height: 320px;
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
        bottom: 50px;
        width: 150px;
        height: 150px;
      }
      #healthrate{
        position: absolute;
        right: 10px;
        bottom: -20px;
        width: 350px;
        height: 220px;
      }
    }
    #ringtrend{
      position: absolute;
      left: 800px;
      top: 20px;
      width: 600px;
      height: 320px;
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
      }

    }
    #makepower{
      position: absolute;
      left: 100px;
      top: 360px;
      width: 600px;
      height: 220px;
      border: 1px solid #999;
      margin-top:10px;
      //text-align: center;
      .powerheader{
        height: 30px;
        line-height: 40px;
        position: relative;
        p{
         text-align: center;
          font-weight: 900;
        }
      }
    }
    #PRhour{
      position: absolute;
      left: 800px;
      top: 360px;
      width: 600px;
      height: 220px;
      border: 1px solid #999;
      margin-top:10px;
      //text-align: center;
      .PRheader{
        height: 30px;
        line-height: 40px;
        position: relative;
        p{
         text-align: center;
          font-weight: 900;
        }
      }

    }
  }
  #footer{
    width: 100%;
    height: 280px;
    // background-color: pink;
    ul{
      display: flex;
      li{
        width: 350px;
        height: 270px;
        margin: 0 30px;
        // background-color: #fff;
        border: 1px solid #999;
        p{
          height: 40px;
          line-height: 40px;
          color: #fff;
          text-align: center;
          background-color: skyblue;
        }
        .chart{
          width: 300px;
          height: 200px;
          margin: 10px ;
        }
      }
    }
  }
}
</style>