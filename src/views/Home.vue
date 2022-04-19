<template>
  <div class="main">
    <el-container style="height: 100%">
      <el-aside width="auto"><LeftSide /></el-aside>
      <el-container>
        <el-header><HeaderSide /></el-header>
       <div id="el-main"><CesiumScene/></div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LeftSide from "../components/Side/LeftSide.vue";
import HeaderSide from "../components/Side/HeadSide.vue";
import CesiumScene from "../components/Map/CesiumScene.vue"
export default {
  components: { LeftSide, HeaderSide,CesiumScene },
  data() {
    return {
    
    };
  },

  methods: {},
};
</script>
<style>
.main {
  width: 100%;
  height: 100%;
}
#el-main {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  /* padding: 20px; */
}
.left {
  width: 5%;
  height: 100%;
  float: left;
}
</style>