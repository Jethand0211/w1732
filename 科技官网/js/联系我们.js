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

    /*笔滑动*/
    var line=document.getElementsByClassName("essay_tit_h2")[0];
    var pen=document.getElementsByClassName("essay_tit_h2")[0].getElementsByTagName('span')[0];
    var ad1=0;
    pen.onclick=function(){
        ad1++;
        if(ad1%2==0){
            line.style.width="780px";
            line.style.transition="width 2s";

        }else{
            line.style.width="180px";
            line.style.transition="width 2s";
        }
    };

    /*点击喜欢弹出*/
    var like=document.getElementsByClassName("essay_like")[0];
    var hd_move=document.getElementsByClassName("hidden_content_sp")[0];
    var twice=document.getElementsByClassName("click_twice")[0];
    var arr=["砒霜有点甜","理是理法是法","梯顶诶仙屡","这波靠理解","共虾米瓦爱里"];
    var ad=Math.floor(Math.random()*5);
    like.onclick=function(){
        hd_move.innerHTML=arr[ad];
        hd_move.style.animation="hidden_move 3s ease ";
        if(ad==0||ad==2||ad==4){
            like.style.backgroundPosition="0 -73px";
            like.style.transition="all 1s 3s";
            twice.style.animation="twice_move 3s ease 3s forwards";
        }
    }
};

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