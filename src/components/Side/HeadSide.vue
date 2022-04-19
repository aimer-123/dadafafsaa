<template>
  <div>
    <header>
      <div class="l-content">
        <!-- <el-button type="goisCollapse" @click="goisCollapse">换</el-button> -->
      </div>
    </header>
    <div id="time" class="time">
      <span class="z-index:9999">{{ nowTime }}</span>
      
    </div>
  </div>
</template>

<script>
import bus from "@/common/bus";
export default {
  data() {
    return {
      nowTime: "",
      msg: true,
    };
  },
  mounted() {
    this.nowTimes();
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =
        new Date(timeStamp).getMonth() + 1 < 10
          ? "0" + (new Date(timeStamp).getMonth() + 1)
          : new Date(timeStamp).getMonth() + 1;
      let date =
        new Date(timeStamp).getDate() < 10
          ? "0" + new Date(timeStamp).getDate()
          : new Date(timeStamp).getDate();
      let hh =
        new Date(timeStamp).getHours() < 10
          ? "0" + new Date(timeStamp).getHours()
          : new Date(timeStamp).getHours();
      let mm =
        new Date(timeStamp).getMinutes() < 10
          ? "0" + new Date(timeStamp).getMinutes()
          : new Date(timeStamp).getMinutes();
      let ss =
        new Date(timeStamp).getSeconds() < 10
          ? "0" + new Date(timeStamp).getSeconds()
          : new Date(timeStamp).getSeconds();
      this.nowTime =
        year +
        "." +
        month +
        "." +
        date +
        "  " +
        "星期" +
        "日一二三四五六".charAt(new Date().getDay()) +
        " " +
        hh +
        ":" +
        mm +
        ":" +
        ss;
    },
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 1000);
      this.clear();
    },
    clear() {
      clearInterval(this.nowTimes);
      this.nowTimes = null;
    },
    //使用bus传值

    // goisCollapse() {
    //   this.msg = !this.msg;
    //   console.log(this.msg);
    //   bus.$emit("toisCollapse", this.msg);
    //   console.log("传过去了");
    // },
  },
  computed: {},
};
</script>

<style>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #545c64;
}

.l-content {
  display: flex;
  align-items: center;
}

.time {
  width: 205px;
  height: 25px;
  color: #fff;
  display: flex;
  z-index: 9999;
  position: absolute;
  top: 3%;
  right: 23px;
}
</style>

<style>
</style>
