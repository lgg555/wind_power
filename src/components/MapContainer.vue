<template>
    <div id="container"></div>
    
  </template>
  
  <script>
  import AMapLoader from '@amap/amap-jsapi-loader'
  import bus from '../utils/index.js'
      window._AMapSecurityConfig = {
            securityJsCode: '65cc5bf5880f136f607c9036f5326509'
      }
  export default {
    data() {
      return {
        map: null,
        autoOptions: {
        input: ''
      },
      auto: null,
      placeSearch: null,
      searchPlaceInput: '',
      showHeatOrNot:false,
      heatmap:null,
      heatmapList:null,
      
      }
    },
    created() {
    bus.on('share_id', val => {
      this.autoOptions.input = val
    }),
      bus.on('share', val => {
        this.searchPlaceInput = val
      }),
      bus.on('shareHeatMapChecked', val => {
        this.showHeatOrNot = val
      })
  },

    methods: {
      // 地图加载初始化
      initMap() {
        AMapLoader.load({
          key: '284641382a8f860b95647503a8abe6f9', // 申请好的Web端开发者Key，首次调用 load 时必填
          version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
          plugins: ['AMap.ToolBar','AMap.Scale','AMap.HawkEye','AMap.MapType','AMap.Geolocation',] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        })
          .then(AMap => {
            this.map = new AMap.Map('container', {
              //设置地图容器id
              viewMode: '3D', //是否为3D地图模式
              pitch:75,//俯仰角度
              zoom: 17, //初始化地图级别
              //layers: [new AMap.TileLayer.Satellite()],
              center: [114.44119248727289, 30.531082861884943], //初始化地图中心点位置
              skyColor: 'skyblue',
              dragEnable: false,//禁止拖拽

            })
          this.map.addControl(new AMap.ToolBar())//加减号控制缩放比例
          this.map.addControl(new AMap.Scale())//比例尺
         // this.map.addControl(new AMap.HawkEye()) //鹰眼
          //this.map.addControl(new AMap.Geolocation()) //控件
          this.map.addControl(new AMap.MapType({
            defaultType:1,//0时为标准图层 1为卫星图
          }))
          let icon1=new AMap.Icon({
            size:new AMap.Size(100,100),//图标尺寸
            image:'src/assets/img/风车灰.png',
            anchor:new AMap.Pixel(50,100),
            cursor:"pointer",
            //imageOffset:new AMap.Pixel(50,100),
           // imageSize:new AMap.Size(100,100),
          })
          let icon2=new AMap.Icon({
            size:new AMap.Size(100,100),//图标尺寸
            image:'src/assets/img/marker.png',
            imageOffset:new AMap.Pixel(0,0),
            imageSize:new AMap.Size(100,100),
          })
          let lnglats=[
            [114.44119248727289, 30.531082861884943,1,46689.5,58],
            [114.44225248727289, 30.531082861884943],
            [114.44319248727289, 30.531082861884943,3,46689.5,58],
            [114.44119248727289, 30.531082861884943,4,46689.5,58],
            [114.44225248727289, 30.531082861884943,5,46689.5,58],
            [114.44319248727289, 30.531082861884943,6,46689.5,58],
          ]
          // 注册一个标记点
          var infoWindow = new AMap.InfoWindow({
            offset: new AMap.Pixel(0, 0),
            content: '信息窗体',
            anchor: 'bottom-center',
          });//展示信息的窗口
          let marker1=new AMap.Marker({
            position:new AMap.LngLat(114.44119248727289, 30.531082861884943),
            icon:icon1,                      
          })
          let marker2=new AMap.Marker({
            position:new AMap.LngLat(114.44225248727289, 30.531082861884943),
            icon:icon1,                       
          })
          let marker3=new AMap.Marker({
            position:new AMap.LngLat(114.44319248727289, 30.531082861884943),
            icon:icon1,                      
          })
          setContent(1,marker1,lnglats[0],46689.5,58)
          setContent(2,marker2,lnglats[1],16239.5,5)
         // console.log(lnglats[1]);
         function setContent(i,marker,arr,power,time){
          marker.content = '<h3 style="text-align:center;margin-bottom:5px;border-bottom:1px solid #ccc">我是' + i + '号风车</h3>';
          marker.content += '<div style="text-align:center;margin-bottom:5px;color:red">经度：' + arr[0] + '</div>';
          marker.content += '<div style="text-align:center;margin-bottom:15px;color:red">纬度：' + arr[1] + '</div>';
          marker.content += '<div>累计发电:' + power + 'kWh</div>';
          marker.content += '<div >已连续发电:' + time+ '个小时</div>';
          marker.content += '<div><button style="background:skyblue;color:#fff">历史轨迹</button>';
          marker.content += '&nbsp;<button style="background:red;color:#fff">实时跟踪&nbsp;</button>';
          marker.content += '&nbsp;<button style="background:orange;color:#fff">设置</button></div>';
         }
         
         
        /* marker1.on('click',(e)=>{
          console.log(e.target);//[12739535.27345822,3571999.8955552536] e.target.getPosition().pos
        })   */
        marker1.on('mouseover', (e)=>{
          infoWindow.setContent(e.target.content);
          infoWindow.open(this.map, e.target.getPosition())
        });
        marker1.on('mouseout', (e)=>{
          infoWindow.close(this.map, e.target.getPosition())
        })
       
        this.map.add(marker1)
        this.map.add(marker2)

        this.map.add(marker3)
          
          })
          .catch(e => {
            console.log(e)
          })
      },
      newMAp(e) {
        //map.setCenter(e.target.getPosition());
        this.map.setZoomAndCenter(15, e.target.getPosition());
        
        var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
        infoWindow.setContent(e.target.content);
        infoWindow.open(this.map, e.target.getPosition());	
      },
      


    },
    mounted() {
      //DOM初始化完成进行地图初始化
      this.initMap()
    },
   
  }
  </script>
  
  <style lang="less" scoped>
   #container {
     //width: 40%;
    height: 500px;
    //margin: 200px auto;
    //border: 1px solid red; 
   
  }
  </style>
  
  