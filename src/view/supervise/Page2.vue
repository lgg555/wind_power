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
              <use xlink:href="#icon-huiliuxiang-green"></use>
            </svg>
            <span>正常</span>
            <span class="bluedata">1402</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-huiliuxiang-red-copy"></use>
            </svg>
            <span>告警</span>
            <span class="bluedata">44</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-huiliuxiang-gray-copy"></use>
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
      <div id="detail" v-for="o in 12" :key="o">
          <div id="card">
             <div id="card_left">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-huiliuxiang-green"></use>
                </svg>
                <p>01#汇流箱</p>
             </div>
             <div id="card_middle">
                <ul>
                  <li>
                    <span>温&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;度:</span>
                    <span class="bluedata">29.20</span>
                    <span>&nbsp;°C</span>
                  </li>
                  <li>
                    <span>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;压:</span>
                    <span class="bluedata">656.10</span>
                    <span>V</span>
                  </li>
                  <li>
                    <span>电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;流:</span>
                    <span class="bluedata">4.56</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;A</span>
                  </li>
                  <li>
                    <span>有功功率:</span>
                    <span class="bluedata">98.56</span>
                    <span>kW</span>
                  </li>
                </ul>
             </div>
              <div id="card_right" >
                <div class="tags" v-for="item in 20" :key="item">
                  <el-tag  class="mx-1 tag" type="success" effect="dark">8.4(A)</el-tag>  
                </div>
                              
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
            width: 530px;
            height: 165px;
            border: 1px solid #999;
            margin: 20px 30px;
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
              border-right: 2px dashed #999;
              ul{         
                width: 170px;
                height: 115px;
                margin-top: 20px;
                li{
                  margin-bottom: 20px;
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