/**
 * Created by Administrator on 2017/12/25.
 */
window.onload=function () {
};
var block2Banner=document.getElementsByClassName("block2Banner")[0];
var block2Left=document.getElementsByClassName("block2Left")[0];
var block2Right=document.getElementsByClassName("block2Right")[0];
var ad=0;
block2Left.onclick=function () {
    ad--;
    if (ad==-1){
        ad=0;
    }
    block2Banner.style.left=-ad*100+"%";
};
block2Right.onclick=function () {
    ad++;
    if (ad==3){
        ad=2;
    }
    block2Banner.style.left=-ad*100+"%";
};

var block4Left=document.getElementsByClassName("block4Left")[0];
var block4Right=document.getElementsByClassName("block4Right")[0];
var block4Content=document.getElementsByClassName("block4Content")[0];
var lineLeft=document.querySelectorAll(".block4Left span")[0];
var lineRight=document.querySelectorAll(".block4Right span")[0];
var c=0;
block4Left.onclick=function () {
    c--;
    if (c==-1){
        c=0;
    }
    block4Content.style.left=c*100+"%";
    lineLeft.style="width: 78px;transition: width .5s .5s";
    lineRight.style="width: 0;transition: width .5s";
};
block4Right.onclick=function () {
    c++;
    if (c==2){
        c=1;
    }
    block4Content.style.left=-c*100+"%";
    lineRight.style="width: 78px;transition: width .5s .5s";
    lineLeft.style="width: 0;transition: width .5s";
};

//点击滚动
var lis=document.querySelectorAll(".headerMenu li");
var dot=document.querySelectorAll(".headerMenu span");
var active=document.querySelectorAll(".headerMenu a");
var content=document.getElementsByClassName("content")[0];
for (var i=0;i<lis.length;i++){
    lis[i].index=i;

    lis[i].onclick=function () {
        for (var j=0;j<lis.length;j++){
            dot[j].setAttribute("style"," ");
            active[j].setAttribute("style"," ");
        }
        if (this.index!=3 && this.index!=4){
            content.style.top=-(this.index+1)*665+"px";
            dot[this.index].setAttribute("style","top: 24px;left: 43%;opacity: 1;transition: all .5s;");
            active[this.index].setAttribute("style","color: #FFF;");
        }else {
            content.style.top="-2660px";
            dot[4].setAttribute("style","top: 24px;left: 43%;opacity: 1;transition: all .5s;");
            dot[3].setAttribute("style","top: 24px;left: 43%;opacity: 1;transition: all .5s;");
            active[4].setAttribute("style","color: #FFF;");
            active[3].setAttribute("style","color: #FFF;");
        }
    }
}

//滚动
var block=0;
var wheelTimes=0;
var s;
var go=false;
window.onmousewheel=function (event) {
    if (event.deltaY>0){
        blockDown();
    } else if (event.deltaY<0){
        blockUp();
    }

};
//鼠标上滚
function blockUp() {
    if (wheelTimes<1){
        // 清除计时器，200毫秒之内的任意滚动只能算一次
        clearTimeout(s);
        s=setTimeout(function () {
            wheelTimes++;
        },200)
    }else if(!go){
        go=true;
        block--;
        if (block<0){
            block=0;
        }
        blockGo();
    }

}
//鼠标下滚
function blockDown() {
    if (wheelTimes<1){
        // 清除计时器，200毫秒之内的任意滚动只能算一次
        clearTimeout(s);
        s=setTimeout(function () {
            wheelTimes++;
        },200)
    }else if(!go){
        go=true;
        block++;
        if (block>4){
            block=4;
        }
        blockGo();
    }
}
//执行滚动
function blockGo() {
    var content=document.getElementsByClassName("content")[0];
    content.style.top=-665*block+"px";
    console.log(block);
    index=block-1;
    for (var j=0;j<lis.length;j++){
        dot[j].setAttribute("style"," ");
        active[j].setAttribute("style"," ");
    }
    if (index==-1){
        dot[0].setAttribute("style","top: 24px;left: 43%;opacity: 1;transition: all .5s;");
        active[0].setAttribute("style","color: #FFF;");
    }
    else if (index!=3 && index!=4){
        content.style.top=-(this.index+1)*665+"px";
        dot[index].setAttribute("style","top: 24px;left: 43%;opacity: 1;transition: all .5s;");
        active[index].setAttribute("style","color: #FFF;");
    }else {
        content.style.top="-2660px";
        dot[4].setAttribute("style","top: 24px;left: 43%;opacity: 1;transition: all .5s;");
        dot[3].setAttribute("style","top: 24px;left: 43%;opacity: 1;transition: all .5s;");
        active[4].setAttribute("style","color: #FFF;");
        active[3].setAttribute("style","color: #FFF;");
    }
    wheelTimes=0;
    go=false;
}

var block1ContentIcon=document.getElementsByClassName("block1ContentIcon")[0];
block1ContentIcon.onclick=function () {
    content.style.top="-665px";
    dot[0].setAttribute("style","top: 24px;left: 43%;opacity: 1;transition: all .5s;");
    active[0].setAttribute("style","color: #FFF;");
}
