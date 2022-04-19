<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3 v-show="!isCollapse">地图</h3>
    <h3 v-show="isCollapse">Map</h3>
     <div id="datatree" class="tree">
        <p>目录</p>
         <div class="checkbox">
        <input
          type="checkbox"
          :value="show.fw_show"
          id="check"
          @change="checkshow"
        />
        <label for="showtiles">无锡市房屋</label><br/>
        <input
          type="checkbox"
          :value="show.rd_show"
          id="check"
          @change="checkshow1"
        />
        <label for="showtiles">无锡市道路</label>
      </div></div>
   </el-menu>
</template>

<script>
import bus from "@/common/bus";
export default {
  data() {
    return {
      isCollapse: false,
      show: {
        fw_show: false,
        rd_show:false
      },
    };
  },
  mounted() {
    // bus.$on("toisCollapse", (data) => {
    //   this.isCollapse = data;
    // });
  },
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    checkshow() {

      this.show.fw_show = !this.show.fw_show;
      console.log(this.show);
      bus.$emit("toshowtiles", this.show);
    },
    checkshow1(){
      this.show.rd_show = !this.show.rd_show;
      console.log(this.show);
      bus.$emit("toshowtiles", this.show);
    }
  },
  computed: {},
};
</script>

<style>
h3 {
  color: #ffffff;
  text-align: center;
  line-height: 48px;
}
.el-menu {
  height: 100%;
  border: none;
  width: 100px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 150px;
  min-height: 400px;
}
</style>
