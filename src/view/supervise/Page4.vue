<template>
  
  <!-- <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-marker"></use>
  </svg> -->
  <div id="environment_container">
    <!-- 头部搜索控制区域 -->
    <div id="env_header">
      <span>设备状态：</span>
      <div id="header_left">
        <ul>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zhuzhuangtu"></use>
            </svg>
            <span>总数</span>
            <span class="bluedata">1560</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-guangfuban_green"></use>
            </svg>
            <span>正常</span>
            <span class="bluedata">1402</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-guangfuban_red-copy"></use>
            </svg>
            <span>告警</span>
            <span class="bluedata">44</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-guangfuban_gray-copy"></use>
            </svg>
            <span>离线</span>
            <span class="bluedata">113</span>
          </li>
        </ul>
      </div>
      <div id="header_right">
        <el-select v-model="value" class="m-2" placeholder="Select" >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-input v-model="input" placeholder="设备名称" class="inp" clearable />
        <el-button plain>搜索</el-button>
      </div>
    </div>
    <!-- 数据展示区域 -->
    <div id="showdata">
      <el-card class="box-card" shadow="hover">     
      <div id="detail" v-for="o in 25" :key="o">
          <div id="card">
             <div id="card_left">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-guangfuban_green"></use>
                </svg>
                <p>01光伏组串</p>
             </div>
             <div id="card_middle">
                <ul>
                  <li>
                    <span>组串电压:</span>
                    <span class="bluedata">&nbsp;&nbsp;&nbsp;72.01</span>
                    <span>V</span>
                  </li>
                  <li>
                    <span>组串电流：</span>
                    <span class="bluedata">50.31</span>
                    <span>A</span>
                  </li>
                  <li>
                    <span>组串功率：</span>
                    <span class="bluedata">3.82</span>
                    <span>kW</span>
                  </li>
                  <li>
                    <span>组串温度:</span>
                    <span class="bluedata">&nbsp;45.87</span>
                    <span>°C</span>
                  </li>
                </ul>
             </div>
             
          </div>
      </div>
      </el-card>
    </div>
    
    <!-- 分页区域 -->
    <div id="pagination">
      <!-- page-size total  -->
      <el-pagination background layout="prev, pager, next,jumper" :total="1000" />
    </div>
    
  </div>
</template>

<script>
export default {
    data(){
      return{
        value:null,
        input:'',
        options : [
          {
            value: 'Option1',
            label: 'Option1',
          },
          {
            value: 'Option2',
            label: 'Option2',
          },
          {
            value: 'Option3',
            label: 'Option3',
          },
          {
            value: 'Option4',
            label: 'Option4',
          },
          {
            value: 'Option5',
            label: 'Option5',
          },
        ]
      }
    }
}
</script>

<style lang="less" scoped>
  #environment_container{
    position: relative;
    height: 1050px;
    #env_header{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 50px;
      //background-color: pink;
      display: flex;
      align-items: center;
      font-size: 20px;
      &>span{
        margin-left: 200px;
      }
      #header_left{
        
        display: flex;
        align-items: center;
        ul>li{
          float: left;
          margin-left: 20px;
          .icon{
            margin-right: 5px;
          }
          .bluedata{
            margin-left: 5px;
          }
        }
      }
      #header_right{
        display: flex;
        align-items: center;
        position: absolute;
        right: 200px;
        top: 0;
        height: 50px;
        .inp{
          margin: 0 20px;
        }
      }
    }
    #showdata{
      position: absolute;
      top: 50px;
      left: 10%;
      width: 80%;
      height: 900px;
      .box-card{
        height: 100%;
        #detail{
          float: left;
          #card{          
            width: 300px;
            height: 140px;
            border: 1px solid #999;
            margin: 15px 30px;
            #card_left{
              float: left;
              width: 100px;
              height: 155px;
              p{
                text-align: center;
              }
              .icon{
              width: 50px;
              height: 50px;
              margin: 40px 25px 20px;
            }
            }
            #card_middle{
              float: left;
              width: 170px;
              height: 155px;
              
              ul{         
                width: 170px;
                height: 115px;
                margin-top: 15px;
                li{
                  margin-bottom: 15px;
                  margin-left: 20px;
                  .bluedata{
                     margin-right: 10px;
                     margin-left: 5px;
                    }
                }
              }
            }
            #card_right{            
              width: 255px;
              height: 155px;
              float: left;
             .tags{
              margin: 20px 10px;                                           
              .tag{
                float: left;
                width: 45px;
                height: 15px;
                margin: 5px;
              }
            }
            }
          }

        }
      }
    }
    #pagination{
      position: absolute;
      left: 40%;
      bottom: 20px;
    }
  }
</style>