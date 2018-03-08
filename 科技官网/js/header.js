/**
 * Created by Administrator on 2017/12/25.
 */
window.onload=function () {
};
var menuDown=document.getElementsByClassName("menuDown");
var menuDownUl=document.querySelectorAll(".menuDown ul");
var menuIcon=document.getElementsByClassName("menuIcon");
for(var i=0;i<menuDown.length;i++){
    menuDown[i].index=i;
    menuDownUl[i].index=i;

    //移入菜单栏
    menuDown[i].onmouseover=function () {
        j=this.index;
        menuIcon[j].style.transform="rotate(180deg)";
        if (j==0){
            menuDownUl[j].style.animation="anim1 .6s forwards";
        }else{
            menuDownUl[j].style.animation="anim2 .6s forwards";
        }

        //下拉框内li效果
        var lis=menuDownUl[j].querySelectorAll("li");
        for (var k=0;k<lis.length;k++){
            lis[k].index=k;
            // lis[k].removeAttribute("style");

            lis[k].onmouseover=function () {
                this.querySelectorAll("a")[0].style.paddingLeft="10px";
                this.querySelectorAll("span")[0].style.display="inline-block";
                this.style.backgroundColor="#3498DB"
            };
            lis[k].onmouseout=function () {
                this.querySelectorAll("a")[0].removeAttribute("style");
                this.querySelectorAll("span")[0].style.display="none";
                this.removeAttribute("style");
            }
        }
    };

    //移出菜单栏
    menuDown[i].onmouseout=function () {
        j=this.index;
        menuDownUl[j].removeAttribute("style");
        menuIcon[j].removeAttribute("style");
    }
}
