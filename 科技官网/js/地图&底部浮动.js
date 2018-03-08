/**
 * Created by Administrator on 2017/12/28.
 */
window.onload=function(){
    /*地图切换*/
    var map_change=document.getElementsByClassName("map_btn")[0].getElementsByTagName("button");
    var map_1=document.getElementsByClassName("map_main")[0].getElementsByTagName("div")[0];
    var map_2=document.getElementsByClassName("map_main")[0].getElementsByTagName("div")[1];
    map_change[0].onclick=function () {
        map_2.style.zIndex="0";
        map_1.style.zIndex="5";
    };
    map_change[1].onclick=function () {
        map_1.style.zIndex="0";
        map_2.style.zIndex="5";
    };

    /*音乐点击*/
    var qq=document.getElementsByClassName("music");
    var yy=document.getElementsByTagName("audio");
    for(var i=0;i<qq.length;i++){
        qq[i].index=i;
        qq[i].onclick=function () {
            var c=this.index;
            console.log(c);
            yy[c].play();
        }
    };

    /*浮动点击会顶部*/
    var fx_top=document.getElementsByClassName("fixed_top")[0];
    var s;
    fx_top.onclick=function(){
        s=setInterval("gd()",5);
    };
    gd=function() {
        var tt=document.documentElement.scrollTop;
        window.scrollBy(0,-10);
        if(tt<=0){
            clearInterval(s);
        }
    };
}


/*浮动显示/隐藏*/
window.onscroll=function () {
    var fx=document.getElementsByClassName("fixed")[0];
    var fx_top=document.getElementsByClassName("fixed_top")[0];
    var fx_earth=document.getElementsByClassName("fixed_earth")[0];
    var tt=document.documentElement.scrollTop;
    if(tt<=100){
        fx_top.style.opacity="0";
        fx_earth.style.opacity="0";
        fx_top.style.transition="all 0.5s";
        fx_earth.style.transition="all 0.5s";
    }else{
        fx.style.display="block";      /*good job!*/
        fx_top.style.opacity="1";
        fx_earth.style.opacity="1";
        fx_top.removeAttribute("style");
    }
};