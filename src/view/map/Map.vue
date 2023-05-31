<template>

    <div id="map_con">
      <!-- <div id="search"><search></search></div> -->
      <!-- <div id="searchbox_container"><heat-map-search-box></heat-map-search-box></div> -->
      <div id="container"><map-container></map-container></div>
    </div>

</template>
 
<script>
import MapContainer from '../../components/MapContainer.vue';
import Search from '../../components/Search.vue';
import HeatMapSearchBox from '../../components/HeatMapSearchBox.vue';
  export default {
    components:{
      MapContainer,Search,HeatMapSearchBox
    }
  }
</script>
 
<style lang="less" scoped>
 #map_con {
    position: relative;
    height: 80vh;
    width: 100%;
    #search{
      position: absolute;
      top: 140px;
      left: 50%;
      transform: translate(-50%,-50%);
      height: 30px;
      width: 400px;
    }
    #searchbox_container{
      position: absolute;
      left:45%;
      top: 80px;
      transform: translate(-50%,-50%);
      z-index: 10;
    }
   #container{
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%,-50%);
    width: 60%;
    height: 600px;
    
    border: 1px solid red; 
   }

  }
</style>