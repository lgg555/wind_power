<template>
    <div class="slider" ref="slider" @click.stop="handelClickSlider">
      <div class="process" :style="{ width,background:bgColor }"></div>
      <div class="thunk" ref="trunk" :style="{ left }">
        <div class="block" ref="dot"></div>
      </div>
    </div>
  </template>
<script>
/*
 * min 进度条最小值
 * max 进度条最大值
 * v-model 对当前值进行双向绑定实时显示拖拽进度
 * */
export default {
  props: {
    // 最小值
    min: {
      type: Number,
      default: 0,
    },
    // 最大值
    max: {
      type: Number,
      default: 100,
    },
    // 当前值
    value: {
      type: Number,
      default: 0,
    },
    // 进度条颜色
    bgColor: {
      type: String,
      default: "#4ab157",
    },
    // 是否可拖拽
    isDrag: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      slider: null, //滚动条DOM元素
      thunk: null, //拖拽DOM元素
      per: this.value, //当前值
    };
  },
  mounted() {
    this.slider = this.$refs.slider;
    this.thunk = this.$refs.trunk;
    var _this = this;
    if (!this.isDrag) return;
    this.thunk.onmousedown = function (e) {
      var width = parseInt(_this.width);
      var disX = e.clientX;
      document.onmousemove = function (e) {
        // value, left, width
        // 当value变化的时候，会通过计算属性修改left，width
        // 拖拽的时候获取的新width
        var newWidth = e.clientX - disX + width;
        // 计算百分比
        var scale = newWidth / _this.slider.offsetWidth;
        _this.per = Math.ceil((_this.max - _this.min) * scale + _this.min); //取整
        // 限制值大小
        _this.per = Math.max(_this.per, _this.min);
        _this.per = Math.min(_this.per, _this.max);

        _this.$emit("input", _this.per);
      };
      document.onmouseup = function () {
        //当拖拽停止发送事件
        _this.$emit("stop", _this.per);
        //清除拖拽事件
        document.onmousemove = document.onmouseup = null;
      };
    };
  },
  methods: {
    handelClickSlider(event) {
      //禁止点击
      if (!this.isDrag) return;
      const dot = this.$refs.dot;
      if (event.target == dot) return;
      //获取元素的宽度l
      let width = this.slider.offsetWidth;
      //获取元素的左边距
      let ev = event || window.event;
      //获取当前点击位置的百分比
      let scale = ((ev.offsetX / width) * 100).toFixed(2);
      this.per = scale;
    },
  },
  computed: {
    // 设置一个百分比，提供计算slider进度宽度和trunk的left值
    // 对应公式为  当前值-最小值/最大值-最小值 = slider进度width / slider总width
    // trunk left =  slider进度width + trunk宽度/2
    scale() {
      return (this.per - this.min) / (this.max - this.min);
    },
    width() {
      return this.slider ? this.slider.offsetWidth * this.scale + "px" : "0px";
    },
    left() {
      return this.slider ? this.slider.offsetWidth * this.scale - this.thunk.offsetWidth / 2 +"px" : "0px";
    },
  },
  watch: {
    value: {
      handler: function () {
        this.per = this.value;
      },
    },
  },
};
</script>
<style scoped>
.box {
  margin: 100px auto 0;
  width: 80%;
}
.clear:after {
  content: "";
  display: block;
  clear: both;
}
.slider {
  position: relative;
  margin: 20px 0;
  width: 100%;
  height: 10px;
  top: 50%;
  background: #ddd;
  border-radius: 5px;
  cursor: pointer;
  z-index: 99999;
}
.slider .process {
  position: absolute;
  left: 0;
  top: 0;
  width: 112px;
  height: 10px;
  border-radius: 5px;
  background: linear-gradient(to right,rgb(87,74,74),rgb(43,108,134));
  z-index: 111;
}
.slider .thunk {
  position: absolute;
  left: 100px;
  top: -4px;
  width: 10px;
  height: 6px;
  z-index: 122;
}
.slider .block {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 1);
  transition: 0.2s all;
}
.slider .block:hover {
  transform: scale(1.1);
  opacity: 0.6;
}
</style>
  