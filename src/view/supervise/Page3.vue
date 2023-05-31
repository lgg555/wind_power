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
              <use xlink:href="#icon-nibianqi-green"></use>
            </svg>
            <span>正常</span>
            <span class="bluedata">1402</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-nibianqi-red-copy"></use>
            </svg>
            <span>告警</span>
            <span class="bluedata">44</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-nibianqi-gray-copy"></use>
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
      <div id="detail1" v-for="o in 10" :key="o">
          <div id="card">
             <div id="card_header">
              <div id="header_left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-nibianqi-green"></use>
                </svg>
                <p>01#逆变器</p>
              </div>
             <div id="header_right">
                <ul>
                  <li>
                    <span>机内温度:</span>
                    <span class="bluedata">44.6</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;°C</span>
                  </li>
                  <li>
                    <span>实时功率:</span>
                    <span class="bluedata">29.20</span>
                    <span>&nbsp;&nbsp;kW</span>
                  </li>
                  <li>
                    <span>交流电压:</span>
                    <span class="bluedata">182.53</span>
                    <span>&nbsp;V</span>
                  </li>
                  <li>
                    <span>交流电流:</span>
                    <span class="bluedata">51.00</span>
                    <span>&nbsp;&nbsp;&nbsp;A</span>
                  </li>
                  <li>
                    <span>转换效率:</span>
                    <span class="bluedata">98.67</span>
                    <span>&nbsp;&nbsp;&nbsp;%</span>
                  </li>
                  <li>
                    <span>日发电量:</span>
                    <span class="bluedata">182.53</span>
                    <span>kWh</span>
                  </li>
                </ul>
             </div>
             </div>
             <div id="card_footer" v-for="o in 10" :key="o">
              <el-tag  class="mx-1 tags" type="success" effect="dark">8.4(A)</el-tag> 
             </div>
          </div>
      </div>
      <div id="detail2" v-for="o in 4" :key="o">
          <div id="card">
             <div id="card_header">
              <div id="header_left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-nibianqi-red-copy"></use>
                </svg>
                <p>01#逆变器</p>
              </div>
             <div id="header_right">
                <ul>
                  <li>
                    <span>机内温度:</span>
                    <span class="bluedata">44.6</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;°C</span>
                  </li>
                  <li>
                    <span>实时功率:</span>
                    <span class="bluedata">29.20</span>
                    <span>&nbsp;&nbsp;kW</span>
                  </li>
                  <li>
                    <span>交流电压:</span>
                    <span class="bluedata">182.53</span>
                    <span>&nbsp;V</span>
                  </li>
                  <li>
                    <span>交流电流:</span>
                    <span class="bluedata">51.00</span>
                    <span>&nbsp;&nbsp;&nbsp;A</span>
                  </li>
                  <li>
                    <span>转换效率:</span>
                    <span class="bluedata">98.67</span>
                    <span>&nbsp;&nbsp;&nbsp;%</span>
                  </li>
                  <li>
                    <span>日发电量:</span>
                    <span class="bluedata">182.53</span>
                    <span>kWh</span>
                  </li>
                </ul>
             </div>
             </div>
             <div id="card_footer" v-for="o in 10" :key="o">
              <el-tag  class="mx-1 tags" type="success" effect="dark">8.4(A)</el-tag> 
             </div>
          </div>
      </div>
      <div id="detail3" v-for="o in 6" :key="o">
          <div id="card">
             <div id="card_header">
              <div id="header_left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-nibianqi-gray-copy"></use>
                </svg>
                <p>01#逆变器</p>
              </div>
             <div id="header_right">
                <ul>
                  <li>
                    <span>机内温度:</span>
                    <span class="bluedata">44.6</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;°C</span>
                  </li>
                  <li>
                    <span>实时功率:</span>
                    <span class="bluedata">29.20</span>
                    <span>&nbsp;&nbsp;kW</span>
                  </li>
                  <li>
                    <span>交流电压:</span>
                    <span class="bluedata">182.53</span>
                    <span>&nbsp;V</span>
                  </li>
                  <li>
                    <span>交流电流:</span>
                    <span class="bluedata">51.00</span>
                    <span>&nbsp;&nbsp;&nbsp;A</span>
                  </li>
                  <li>
                    <span>转换效率:</span>
                    <span class="bluedata">98.67</span>
                    <span>&nbsp;&nbsp;&nbsp;%</span>
                  </li>
                  <li>
                    <span>日发电量:</span>
                    <span class="bluedata">182.53</span>
                    <span>kWh</span>
                  </li>
                </ul>
             </div>
             </div>
             <div id="card_footer" v-for="o in 10" :key="o">
              <el-tag  class="mx-1 tags" type="success" effect="dark">8.4(A)</el-tag> 
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
            color: skyblue;
            font-weight: 700;
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
        //width: 300px;
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
        #detail1{
          float: left;
          #card{
            position: relative;
            width: 305px;
            height: 200px;
            border: 1px solid #999;
            margin: 10px 25px;
            #card_header{
              width: 305px;
              height: 140px;
              border-bottom: 2px solid #999;
              #header_left{
                position: absolute;
                left: 5px;
                top: 10px;
                width: 100px;
                height: 115px;
                text-align: center;
                //background-color: skyblue;
                .icon{
                  width: 60px;
                  height: 60px;
                  margin: 10px 20px;
                  
                }
              }
              #header_right{
                position: absolute;
                right: 0;
                top: 0;
                width: 180px;
                height: 140px;
                //background-color: red;
                ul{
                  position: absolute;
                left: 0px;
                top: 5px;
                width: 170px;
                height: 140px;
                  li{
                    margin-bottom: 5px;
                    .bluedata{
                      margin-left: 10px;
                    }
                  }
                }
              }
            }
            #card_footer{
              
              //width: 305px;
              //height: 60px;
              background-color: pink;
              
               .tags{
                //display: flex;
                float: left;
                margin: 5px;
                width: 50px;
                height: 15px;
              } 
            }
          }
          
            }
            #detail2{
          float: left;
          #card{
            position: relative;
            width: 305px;
            height: 200px;
            border: 1px solid #999;
            margin: 10px 25px;
            #card_header{
              width: 305px;
              height: 140px;
              border-bottom: 2px solid #999;
              #header_left{
                position: absolute;
                left: 5px;
                top: 10px;
                width: 100px;
                height: 115px;
                text-align: center;
                //background-color: skyblue;
                .icon{
                  width: 60px;
                  height: 60px;
                  margin: 10px 20px;
                  
                }
              }
              #header_right{
                position: absolute;
                right: 0;
                top: 0;
                width: 180px;
                height: 140px;
                //background-color: red;
                ul{
                  position: absolute;
                left: 0px;
                top: 5px;
                width: 170px;
                height: 140px;
                  li{
                    margin-bottom: 5px;
                    .bluedata{
                      margin-left: 10px;
                    }
                  }
                }
              }
            }
            #card_footer{
              
              //width: 305px;
              //height: 60px;
              background-color: pink;
              
               .tags{
                //display: flex;
                float: left;
                margin: 5px;
                width: 50px;
                height: 15px;
              } 
            }
          }
          
            }
            #detail3{
          float: left;
          #card{
            position: relative;
            width: 305px;
            height: 200px;
            border: 1px solid #999;
            margin: 10px 25px;
            #card_header{
              width: 305px;
              height: 140px;
              border-bottom: 2px solid #999;
              #header_left{
                position: absolute;
                left: 5px;
                top: 10px;
                width: 100px;
                height: 115px;
                text-align: center;
                //background-color: skyblue;
                .icon{
                  width: 60px;
                  height: 60px;
                  margin: 10px 20px;
                  
                }
              }
              #header_right{
                position: absolute;
                right: 0;
                top: 0;
                width: 180px;
                height: 140px;
                //background-color: red;
                ul{
                  position: absolute;
                left: 0px;
                top: 5px;
                width: 170px;
                height: 140px;
                  li{
                    margin-bottom: 5px;
                    .bluedata{
                      margin-left: 10px;
                    }
                  }
                }
              }
            }
            #card_footer{
              
              //width: 305px;
              //height: 60px;
              background-color: pink;
              
               .tags{
                //display: flex;
                float: left;
                margin: 5px;
                width: 50px;
                height: 15px;
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