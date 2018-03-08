/**
 * Created by Administrator on 2017/12/29.
 */
var map = new AMap.Map('map',{
    zoom: 10,
    center: [118.11549,24.496076]//new AMap.LngLat(116.39,39.9)
});
AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
    function(){
        map.addControl(new AMap.ToolBar());

        map.addControl(new AMap.Scale());

        map.addControl(new AMap.OverView({isOpen:true}));
    });

var marker = new AMap.Marker({
    position: [118.11549,24.496076],//marker所在的位置
    map:map,//创建时直接赋予map属性
    animation:"AMAP_ANIMATION_BOUNCE"
});