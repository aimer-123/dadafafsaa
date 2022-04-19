<template>
    <div id="cesiumContainer">
        <img 
            ref="sillygif" 
            style="position: absolute; width: 54px; height:54px; z-index: 2" 
            v-for="(item, index) in routeData"
            :key="index"
            :src="item.weatherImg"
            v-show="item.weatherImg !== ''"
        />
    </div>
</template>
<script>
import { weatherData } from './js/weather';
export default {
    data() {
        return {
            toolBarData: [//工具栏
                { id: 1, name: "大雨", checked: false, img: require("./img/sss.gif") },
                { id: 3, name: "雷电", checked: false, img: require("./img/大雨.gif") },
            ],
            viewer: null,//三维对象
            routeData: [],//路线数据
        }
    },
    mounted(){
        this.initViewer();//初始化三维地图
	},
    methods: {
        //初始化三维地图
        initViewer(){
            //Cesium.Ion.defaultAccessToken = "你自己的AccessToken";
            this.viewer = new Cesium.Viewer("cesiumContainer", {
                animation: true,//显隐时钟
                shouldAnimate:true,//自动播放
                timeline: true,//显隐时间轴
                baseLayerPicker: false,//显隐切换底图按钮
                geocoder: false,//显隐搜索按钮
                navigationHelpButton: false,//显隐帮助按钮
                vrButton: false,//显隐vr按钮
                infoBox: false,//显隐默认弹框
                sceneModePicker: false,//显隐切换二三维按钮
                homeButton: false,//显隐home按钮
                fullscreenButton: false,//显隐全屏按钮
                creditContainer: document.createElement("div"),//显隐logo
                imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
                    url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
                }),
                terrainProvider : Cesium.createWorldTerrain(),//默认的高程地图
            });
            //叠加国界服务
            let iboMap = new Cesium.UrlTemplateImageryProvider({
                url: 'https://t{s}.tianditu.gov.cn/DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=你自己的tk',
                subdomains: ['0','1','2','3','4','5','6','7'],
                tilingScheme : new Cesium.WebMercatorTilingScheme(),
                maximumLevel : 10
            });
            this.viewer.imageryLayers.addImageryProvider(iboMap);
            //开启深度检测
            this.viewer.scene.globe.depthTestAgainstTerrain = false;
            //获取三维数据
            this.getRouteData();
        },
        //获取线路数据
        getRouteData(){
            //路线数据
            let resArr = [
                { lon: 108.36707938843418, lat: 22.82040673160957, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.41378409564336, lat: 22.819920224242807, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.46048880285254, lat: 22.819433716876045, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.50719351006173, lat: 22.818947209509282, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.5538982172709, lat: 22.81846070214252, height: 0, weatherName: "小雨", weatherImg: "" },
                { lon: 108.5684908551974, lat: 22.79975173193051, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.54682627836809, lat: 22.75866797098716, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.5364187466562, lat: 22.713135019747657, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.51012491242496, lat: 22.684817620988767, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.46390406008231, lat: 22.678094587920747, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.41768320773969, lat: 22.67137155485273, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.40521353712411, lat: 22.63231030624854, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.40047211282993, lat: 22.585844348165494, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.40076314236018, lat: 22.539429102792543, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.40643999603807, lat: 22.493068131089686, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.40927369012122, lat: 22.446956147780245, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.3956249685447, lat: 22.40228760443888, height: 0, weatherName: "阴", weatherImg: "" },
                { lon: 108.39365522094775, lat: 22.358234673324827, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.41192432111414, lat: 22.315248555286278, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.42500817357596, lat: 22.271118918346254, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.42651407546654, lat: 22.224435959738113, height: 0, weatherName: "雷阵雨", weatherImg: "" },
                { lon: 108.43518145756487, lat: 22.17864681103129, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.4451958307643, lat: 22.133025777567156, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.44898976012885, lat: 22.086544506394528, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.4569608382348, lat: 22.04154387903869, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.48114597278934, lat: 22.00158583064425, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.50729410478296, lat: 21.963447043352055, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.54530135015922, lat: 21.93629901094044, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.58330859553548, lat: 21.909150978528828, height: 0, weatherName: "中雨", weatherImg: "" },
                { lon: 108.62717065532753, lat: 21.904893075811103, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.67098222685098, lat: 21.896572536781637, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.71231431555826, lat: 21.874818805883073, height: 0, weatherName: "大雨", weatherImg: "" },
                { lon: 108.75609068622725, lat: 21.861157212821972, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.8025541826556, lat: 21.85639172600881, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.84746943394899, lat: 21.844801687465267, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.89144073261119, lat: 21.829050774511643, height: 0, weatherName: "", weatherImg: "" },
                { lon: 108.93541203127339, lat: 21.81329986155802, height: 0, weatherName: "多云", weatherImg: "" },
                { lon: 108.97980814203709, lat: 21.799033177178963, height: 0, weatherName: "", weatherImg: "" },
                { lon: 109.02545431177013, lat: 21.78913400783927, height: 0, weatherName: "", weatherImg: "" },
                { lon: 109.07110048150317, lat: 21.779234838499573, height: 0, weatherName: "", weatherImg: "" },
                { lon: 109.1167466512362, lat: 21.76933566915988, height: 0, weatherName: "", weatherImg: "" },
                { lon: 109.16245083841007, lat: 21.75972231270521, height: 0, weatherName: "大暴雨", weatherImg: "" },
                { lon: 109.20834398370768, lat: 21.751039825757015, height: 0, weatherName: "", weatherImg: "" },
                { lon: 109.23344423638372, lat: 21.725129392815596, height: 0, weatherName: "", weatherImg: "" },
                { lon: 109.23344423638372, lat: 21.678422151782613, height: 0, weatherName: "", weatherImg: "" },
                { lon: 109.22763271225567, lat: 21.632430342063202, height: 0, weatherName: "", weatherImg: "" },
                { lon: 109.21630454235802, lat: 21.587117662472572, height: 0, weatherName: "特大暴雨", weatherImg: "" },
                { lon: 109.22595001238774, lat: 21.541659339628023, height: 0, weatherName: "", weatherImg: "" },
                { lon: 109.22053316667653, lat: 21.5044292752671, height: 0, weatherName: "", weatherImg: "" },
                { lon: 109.1774187903384, lat: 21.486464951792875, height: 0, weatherName: "", weatherImg: "" },
                { lon: 109.15388011769447, lat: 21.47665717152458, height: 0, weatherName: "", weatherImg: "" },
            ];
            //时间赋值、天气图标赋值、起点终点赋值
            resArr.map((item, index) => {
                item.time = index * 40;
                if(index == 0){
                    item.weatherImg = require("@/assets/images/qidian.png");
                }
                if(index == resArr.length - 1){
                    item.weatherImg = require("@/assets/images/qidian1.png");
                }
                weatherData.map(weather => {
                    if(item.weatherName == weather.name){
                        item.weatherImg = weather.img;
                    }
                })
            });
            this.routeData = resArr;
            //创建路线点
            this.createPoint(this.routeData);
            //创建路线
            this.createLine(this.routeData);
            //创建图标
            this.routeData.map((item, index) => {
                if(item.weatherImg !== ""){
                    this.showIcon(item.lon, item.lat, 100, "sillygif", index, 60, 25);
                }
            })
            //模型移动
            this.modelMove(this.routeData);
        },
        //创建路线点
        createPoint(arr){
            let pointPrimitives = null;
            pointPrimitives = this.viewer.scene.primitives.add(new Cesium.PointPrimitiveCollection());
            arr.map(item => {
                pointPrimitives.add({
                    id: `point_${item.lon}_${item.lat}`,
                    pixelSize: 10,
                    color: Cesium.Color.fromCssColorString(item.weatherImg !== '' ? "#ff0000" : "#FC7E02"),
                    position: Cesium.Cartesian3.fromDegrees(item.lon, item.lat, item.height),
                });
            })
        },
        //创建路线
        createLine(arr){
            let newArr1 = [], newArr2 = [];
            arr.map(item => {
                newArr1.push(item.lon);
                newArr1.push(item.lat);
            })
            newArr2 = newArr1;
            this.viewer.entities.add({
                name: 'line',
                polyline: {
                    positions: Cesium.Cartesian3.fromDegreesArray(newArr2),
                    width: 5,
                    material: Cesium.Color.fromCssColorString('#883d01'),
                    clampToGround: true
                }
            })
        },
        //创建图标
        showIcon(lon, lat, height, refsId, index, topNum, leftNum){
            let that = this;
            let scratch = new Cesium.Cartesian2();
            that.viewer.scene.preRender.addEventListener(function() {
                let position = Cesium.Cartesian3.fromDegrees(lon, lat, height);
                let canvasPosition = that.viewer.scene.cartesianToCanvasCoordinates(position, scratch);
                if (Cesium.defined(canvasPosition)) {
                    that.$refs[refsId][index].style.top = canvasPosition.y - topNum + 'px';
                    that.$refs[refsId][index].style.left = canvasPosition.x - leftNum + 'px';
                }
            });
        },
        //清空三维图层
        allClear(){
            this.viewer.entities.removeAll();
            this.viewer.scene.primitives.removeAll();
        },
        //模型移动功能
        modelMove(arr){
            //初始化位置
            this.viewer.scene.camera.setView({
                destination: Cesium.Cartesian3.fromDegrees(arr[0].lon + 0.7, arr[0].lat - 2.4, 100000),
                orientation: {
                    heading: Cesium.Math.toRadians(0),
                    pitch: Cesium.Math.toRadians(-30),//看地图的角度
                    roll: Cesium.Math.toRadians(0),
                },
            }); 
            //获取最后一个经纬度点的时间
            let lastTime = arr[arr.length - 1].time;
            //起始时间
            let start = Cesium.JulianDate.fromDate(new Date());
            //结束时间
            let stop = Cesium.JulianDate.addSeconds(start, lastTime, new Cesium.JulianDate());
            //设置始时钟始时间
            this.viewer.clock.startTime = start.clone();
            //设置时钟当前时间
            this.viewer.clock.currentTime = start.clone();
            //设置始终停止时间
            this.viewer.clock.stopTime  = stop.clone();
            //时间速率，数字越大时间过的越快
            this.viewer.clock.multiplier = 10;
            //时间轴
            this.viewer.timeline.zoomTo(start,stop);
            //循环执行,即为2，到达终止时间，重新从起点时间开始
            this.viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;
            //添加模型
            let property = this.computeFlight(start,arr);
            let modelEnty = this.viewer.entities.add({
                //和时间轴关联
                availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
                    start: start,
                    stop: stop
                })]),
                position: property,
                //根据所提供的速度计算模型的朝向
                orientation: new Cesium.VelocityOrientationProperty(property),
                //模型数据
                model: {
                    uri: process.env.NODE_ENV === "production" ? '/visualization/3dmodel/CesiumMilkTruck.glb' : '/3dmodel/CesiumMilkTruck.glb',
                    minimumPixelSize: 50,
                },
                //文字标签
                label: {
                    text: "油罐车运输路线",
                    font: '500 30px Helvetica',
                    scale: 0.5,
                    style: Cesium.LabelStyle.FILL,
                    fillColor: Cesium.Color.fromCssColorString("#000000"),
                    pixelOffset: new Cesium.Cartesian2(0, -50),//偏移量
                    showBackground: true,
                    backgroundColor: new Cesium.Color(230,129,36,0.7),
                    backgroundPadding: new Cesium.Cartesian2(16, 9)
                },
            });
            //实时监听位置的变化
            let that = this;
            that.viewer.clock.onTick.addEventListener(() => {
                let curtime = that.viewer.clock.currentTime;
                let pos = modelEnty.position.getValue(curtime);
                let cartographic = Cesium.Ellipsoid.WGS84.cartesianToCartographic(pos);
                let lon = Cesium.Math.toDegrees(cartographic.longitude);
                let lat = Cesium.Math.toDegrees(cartographic.latitude);
                let height = cartographic.height;
                let sjc = curtime.secondsOfDay.toFixed(0) - start.secondsOfDay.toFixed(0);
                this.routeData.map(item => {
                    if(item.time == sjc){
                        that.toolBarData.map(tool => {
                            if(item.weatherName.includes("雷") && tool.name.includes("雷")){
                                tool.checked = true;
                            }
                            if(item.weatherName.includes("雨") && tool.name.includes("雨")){
                                tool.checked = true;
                            }
                        })
                        let timer = null;
                        timer = setInterval(() => {
                            that.toolBarData.map(tool => {
                                tool.checked = false;
                            })
                            clearInterval(timer);
                        }, 3000);
                    }
                })
            })
        },
        //数据转换
        computeFlight(start, source){
            //取样位置，相当于一个集合
            let property = new Cesium.SampledPositionProperty();
            for(let i = 0; i < source.length; i++){
                let time = Cesium.JulianDate.addSeconds(start, source[i].time, new Cesium.JulianDate);
                let position = Cesium.Cartesian3.fromDegrees(source[i].lon, source[i].lat, source[i].height);
                property.addSample(time, position); 
            }
            return property;
        },
    }
}
</script>

<style lang="less" scoped>
#cesiumContainer{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden; 
}
</style>
