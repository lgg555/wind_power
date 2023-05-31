<template>
       <!-- 四个小框 -->
      <!--实时功率 -->
      <div id="nowpower">
        <p>实时功率</p>
        <ul>
          <li>
            <span><img src="../../../public/功率.png" alt=""></span>
            <span class="data2">105.95</span>
            <span>万kW</span>
          </li>
          <li>
            <span>能效PR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span class="data3">87</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%</span>
          </li>
          <li>
            <span>当日最大功率</span>
            <span class="data3">130.75</span>
            <span>万kW</span>
          </li>
          <li>
            <span>昨日最大功率</span>
            <span class="data3">129.68</span>
            <span>万kW</span>
          </li>
        </ul>
      </div>
      <!-- 当日电量 -->
      <div id="nowelec">
        <p>当日电量</p>
        <ul>
          <li>
            <span><img src="../../../public/电量.png" alt=""></span>
            <span class="data2">189.66</span>
            <span>万kWh</span>
          </li>
          <li>
            <span>当月电量</span>
            <span class="data3">5068.52</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;万kWh</span>
          </li>
          <li>
            <span>当季电量</span>
            <span class="data3">13205.01</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;万kWh</span>
          </li>
          <li>
            <span>当年电量</span>
            <span class="data3">14147.55</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;万kWh</span>
          </li>
        </ul>
      </div>
      <!-- 当前告警 -->
      <div id="nowring">
        <p>当前告警</p>
        <ul>
          <li>
            <span><img src="../../../public/告警.png" alt=""></span>
            <span class="data2">&nbsp;1</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;条</span>
          </li>
          <li>
            <span>当日告警</span>
            <span class="data3">10</span>
            <span>&nbsp;&nbsp;条</span>
          </li>
          <li>
            <span>当月告警</span>
            <span class="data3">35</span>
            <span>&nbsp;&nbsp;条</span>
          </li>
          <li>
            <span>当年告警</span>
            <span class="data3">457</span>
            <span>条</span>
          </li>
        </ul>
      </div>
      <!-- 风险预警 -->
      <div id="dangerring">
        <p>风险预警</p>
        <ul>
          <li>
            <span><img src="../../../public/风险预警.png" alt=""></span>
            <span class="data2">&nbsp;78</span>
            <span>&nbsp;&nbsp;条</span>
          </li>
          <li>
            <span>当日告警</span>
            <span class="data3">17</span>
            <span>&nbsp;&nbsp;条</span>
          </li>
          <li>
            <span>当月告警</span>
            <span class="data3">45</span>
            <span>&nbsp;&nbsp;条</span>
          </li>
          <li>
            <span>当年告警</span>
            <span class="data3">867</span>
            <span>条</span>
          </li>
        </ul>
      </div>

        <!-- 光伏阵列区 -->
        <div id="lightarea">
          <p>光伏阵列区地图撒点对话框</p>
          <div id="lightarea_header">
            <span>1#光伏阵列区</span>
            <span ><el-icon size="30"><CloseBold /></el-icon></span>
          </div>
          <hr>
          <div id="lightarea_main">
            <ul>
              <li>
                <el-icon size="35"><TrendCharts /></el-icon>
                <span>当前功率</span>
                <span class="data1">87</span>
                <span>万kW</span>
              </li>
              <li>
                <el-icon size="35"><Bell /></el-icon>
                <span>当前告警</span>
                <span class="data1">10</span>
                <span>条</span>
              </li>
              <li>
                <el-icon size="35"><Coin /></el-icon>
                <span>当日电量</span>
                <span class="data1">105</span>
                <span>万kWh</span>
              </li>
              <li>
                <el-icon size="35"><Histogram /></el-icon>
                <span>累计电量</span>
                <span class="data1">15</span>
                <span>万MWh</span>
              </li>
              <li>
                <el-icon size="35"><Coin /></el-icon>
                <span>发电效率</span>
                <span class="data1">98%</span>
                
              </li>
              <li>
                <el-icon size="35"><Coin /></el-icon>
                <span>健康指标</span>
                <span class="data1">25%</span>
              </li>
            </ul>
          </div>
      </div>
</template>

<script>
export default {
 // 注册一条多个点组成的折线
 let path = [
              new AMap.LngLat(114.413481, 30.507734),
              new AMap.LngLat(114.423481, 30.527734),
              new AMap.LngLat(114.433481, 30.547734),
              new AMap.LngLat(114.443481, 30.527734)
          ];
          let polyline1 = new AMap.Polyline({
                path: path,  
                borderWeight: 2, // 线条宽度，默认为 1
                strokeColor: 'red', // 线条颜色
                lineJoin: 'round' // 折线拐点连接处样式
            });
}
</script>

<style>

</style>