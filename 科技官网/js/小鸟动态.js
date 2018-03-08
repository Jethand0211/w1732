/**
 * Created by Administrator on 2017/12/25.
 */
window.onload=function(){
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

    /*点击显示内容*/
    var click_down=document.getElementsByClassName("click_down")[0];
    var essay_hd=document.getElementsByClassName("bird_essay_hd");
    var click_none=document.getElementsByClassName("click_mouse")[0];
    var ad=0;
    click_down.onclick=function(){
        essay_hd[ad].style.display="block";
        ad++;
        if(ad==2){
            click_down.style.display="none";
            click_none.src="img-小鸟动态/click_none.jpg";
        }
    };

    /*笔滑动*/
    var line=document.getElementsByClassName("bird_tit_h2")[0];
    var pen=document.getElementsByClassName("bird_tit_h2")[0].getElementsByTagName('span')[0];
    var ad1=0;
    pen.onclick=function(){
        ad1++;
        if(ad1%2==0){
            line.style.width="1100px";
            line.style.transition="width 2s";

        }else{
            line.style.width="120px";
            line.style.transition="width 2s";
        }
        console.log(ad1);
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