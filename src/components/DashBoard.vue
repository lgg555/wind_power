<template>
    <div class="per_page">
      <div id="perChart"></div>
    </div>
  </template>
  <script>
  import * as echarts from 'echarts'
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
       percentage: {
        type: Number,
        default: 83
      }, 
      IndexDesc: {
        type: String,
        default: '%'
      }
    },
    created() {
      this.$nextTick(() => {
        this.perBtn()
      })
    },
    methods: {
      perBtn() {
        let myChart = echarts.init(document.getElementById('perChart'))
        let option = {
          series: [
            {
              type: 'gauge',
              radius: 100,//185
              progress: {
                show: true,
                width: 16
              },
              axisLine: {
                lineStyle: {
                  width: 15//38
                }
              },
              splitLine: {
                length: 15,
                lineStyle: {
                  width: 2,
                  color: '#235C8A'
                }
              },
              itemStyle: {
                  color: '#4d8fc6'
              },
              axisLabel: {
                distance: 20, // 文字离表盘的距离50
                color: '#235C8A',
                fontSize: 12
              },
              detail: {
                valueAnimation: true,
                fontSize: 20,
                color: '#235C8A'
              },
              pointer: {
                // width: 3, // 指针的宽度
                length: '30%' // 指针长度，按照半圆半径的百分比
              },
              title: { // 设置仪表盘中间显示文字样式
                offsetCenter: [0, '60%'],                
                  fontWeight: 'bolder',
                  fontSize: 14,
                  color: '#235C8A',                
              },
              data: [
                {
                  value: this.percentage,
                  name:  '健康度HI'
                }
              ]
            }
          ]
        }
        myChart.setOption(option)
        // 让图表跟随屏幕自动的去适应
        window.addEventListener('resize', function () {
          myChart.resize()
        })
      }
    }
  }
  </script>
  <style lang="less" scoped>
  #perChart {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
  </style>