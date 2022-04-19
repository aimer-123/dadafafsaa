<template>
  <div id="container" class="box">
    <div id="cesiumContainer"></div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body,
#container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.box {
  height: 100%;
}
#cesiumContainer {
  height: 100%;
}
</style>
<script>
import bus from "@/common/bus";
var Cesium = require("cesium/Cesium");
export default {
  name: "cesiumPage",
  data() {
    return {
      show: {
        fw_show: false,
        rd_show: false,
      },
      fw_tileset: null,
      rd_tileset: null,
    };
  },
  methods: {
    addcesium() {
      var cesiumContainer = document.getElementById("cesiumContainer");
      var viewer = new Cesium.Viewer("cesiumContainer", {
        geocoder: true,
        timeline: false,
        sceneModePicker: true,
        navigationHelpButton: false,
        infoBox: true,
        homeButton: true,
        animation: false,
      });
      Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(80,22,130,50); //home定位到中国范围

      viewer.scene.debugShowFramesPerSecond = true;

      viewer._cesiumWidget._creditContainer.style.display = "none";
      // this.addmodel(viewer);
      const rd_tileset = viewer.scene.primitives.add(
        new Cesium.Cesium3DTileset({
          url: "/static/data/XD/tileset.json", //数据路径
          maximumScreenSpaceError: 2, //最大的屏幕空间误差
          maximumNumberOfLoadedTiles: 1000, //最大加载瓦片个数
        })
      );
      const ddty=viewer.scene.primitives.add(
        new Cesium.Cesium3DTileset({
          url:'/static/data/road_ddty/tileset.json',
          maximumScreenSpaceError: 2, //最大的屏幕空间误差
          maximumNumberOfLoadedTiles: 1000, //最大加载瓦片个数
        })
      )

      const fw_tileset = viewer.scene.primitives.add(
        new Cesium.Cesium3DTileset({
          url: "/static/data/fw1/tileset.json", //数据路径
          maximumScreenSpaceError: 2, //最大的屏幕空间误差
          maximumNumberOfLoadedTiles: 1000, //最大加载瓦片个数
        })
      );
      viewer.flyTo(ddty);
      // debugger
      fw_tileset.show = false;
      rd_tileset.show = false;
      this.fw_tileset = fw_tileset;
      this.rd_tileset = rd_tileset;
      
    },
    

    //#region
    /* addmodel(viewer) {
      var instances = [];
      Cesium.Resource.fetchJson({
        url: "./static/data/manypoint.json",
      }).then((response) => {
        const data = response;
        data.forEach((item) => {
          var modelMatrix = Cesium.Transforms.headingPitchRollToFixedFrame(
            Cesium.Cartesian3.fromDegrees(item.x, item.y, 1),
            new Cesium.HeadingPitchRoll(0, 0, 0)
          );
          Cesium.Matrix4.multiplyByUniformScale(
            modelMatrix,
            0.005,
            modelMatrix
          );
          instances.push({
            modelMatrix: modelMatrix,
          });
        });
        console.log(data);
        var collection = viewer.scene.primitives.add(
          new Cesium.ModelInstanceCollection({
            url: "./static/demo/tree3.glb",
            instances: instances,
          })
        );
      });
    }, */
    //#endregion
    //aaa是引入组件
  },
  mounted() {
    this.addcesium();
    bus.$on("toshowtiles", (data) => {
      this.show = data;
      console.log(this.show.fw_show, "sdkssj");
      this.fw_tileset.show = this.show.fw_show;
      this.rd_tileset.show = this.show.rd_show;
    });
    // var Tiles=new Cesium3DTileset({
    //   url:'./static/data/fw1/tileset.json'
    // });
    // viewer.scene.primitives.add(Tiles)
  },
};
</script>
 


