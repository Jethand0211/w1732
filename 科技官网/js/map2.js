/**
 * Created by Administrator on 2017/12/29.
 */
var map1 = new AMap.Map('map1',{
    pitch:75,
    zoom: 10,
    expandZoomRange:true,
    center: [118.20,24.46],//new AMap.LngLat(116.39,39.9)
    viewMode:'3D',
    zooms:[3,20]
});
AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
    function(){
        map1.addControl(new AMap.ToolBar());

        map1.addControl(new AMap.Scale());

        map1.addControl(new AMap.OverView({isOpen:true}));
    });
var marker1 = new AMap.Marker({
    position: [118.20, 24.46],//marker所在的位置
    map:map1,//创建时直接赋予map属性
    animation:"AMAP_ANIMATION_BOUNCE"
});