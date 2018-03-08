/**
 * Created by Administrator on 2017/12/25.
 */
window.onload=function () {
    var Arr=["../img/首页/banner01_bg.jpg","../img/首页/banner02.jpg","../img/首页/banner03_bg.jpg"];
    var lis=document.getElementsByClassName("middle_01_li");
    var banner_bg=document.getElementsByClassName("banner_bg")[0];
    var banner_all_img01=document.getElementsByClassName("banner_all_img01")[0];
    var banner_all_img02=document.getElementsByClassName("banner_all_img02")[0];
    var banner_all_img03=document.getElementsByClassName("banner_all_img03")[0];
    var pre_left=document.getElementsByClassName("pre_left")[0];
    var next_right=document.getElementsByClassName("next_right")[0];
    var ad=0;
    for(var i=0;i<lis.length;i++){
        lis[0].style.backgroundColor="red";
        pre_left.onclick=function (){
            ad--;
            if(ad<0){
                ad=2;
                banner_all_img01.style.display="none";
                banner_all_img02.style.display="block";
                banner_all_img03.style.display="none";
                lis[2].style.backgroundColor="red";
                lis[1].style.backgroundColor="";
                lis[0].style.backgroundColor=""
            }
            else if(ad==0){
                banner_all_img01.style.display="none";
                banner_all_img02.style.display="none";
                banner_all_img03.style.display="block";
                lis[0].style.backgroundColor="red";
                lis[1].style.backgroundColor="";
                lis[2].style.backgroundColor=""
            }
            else if (ad==1){
                banner_all_img01.style.display="block";
                banner_all_img02.style.display="none";
                banner_all_img03.style.display="none";
                lis[1].style.backgroundColor="red";
                lis[0].style.backgroundColor="";
                lis[2].style.backgroundColor=""
            }
            banner_bg.style.backgroundImage="url('"+Arr[ad]+"')";
        };
        next_right.onclick=function (){
           ad++;
           if(ad>2){
               ad=0;
               banner_all_img01.style.display="none";
               banner_all_img02.style.display="none";
               banner_all_img03.style.display="block";
               lis[0].style.backgroundColor="red";
               lis[1].style.backgroundColor="";
               lis[2].style.backgroundColor=""
           }
           else if(ad==2){
               banner_all_img01.style.display="none";
               banner_all_img02.style.display="block";
               banner_all_img03.style.display="none";
               lis[2].style.backgroundColor="red";
               lis[1].style.backgroundColor="";
               lis[0].style.backgroundColor=""

           }

           else if (ad==1){
               banner_all_img01.style.display="block";
               banner_all_img02.style.display="none";
               banner_all_img03.style.display="none";
               lis[1].style.backgroundColor="red";
               lis[0].style.backgroundColor="";
               lis[2].style.backgroundColor=""
           }

            banner_bg.style="background-image:url('"+Arr[ad]+"')";

        };


        lis[0].onclick=function () {
            banner_all_img01.style.display="block";
            banner_all_img02.style.display="none";
            banner_all_img03.style.display="none";
            banner_bg.style="background-image:url('"+Arr[0]+"')";
            lis[0].style.backgroundColor="red";
            lis[1].style.backgroundColor="";
            lis[2].style.backgroundColor=""
        };
        lis[1].onclick=function () {
            banner_all_img01.style.display="none";
            banner_all_img02.style.display="block";
            banner_all_img03.style.display="none";
            banner_bg.style="background-image:url('"+Arr[2]+"')";
            lis[1].style.backgroundColor="red";
            lis[0].style.backgroundColor="";
            lis[2].style.backgroundColor=""
        };
        lis[2].onclick=function () {
            banner_all_img01.style.display="none";
            banner_all_img02.style.display="none";
            banner_all_img03.style.display="block";
            banner_bg.style="background-image:url('"+Arr[1]+"')";
            lis[2].style.backgroundColor="red";
            lis[1].style.backgroundColor="";
            lis[0].style.backgroundColor=""
        };


    }
    var now_line_one=document.getElementsByClassName("now_line_one");
    var content01=document.getElementsByClassName("chanpin_banner_content01")[0];
    var content02=document.getElementsByClassName("chanpin_banner_content02")[0];
    var content03=document.getElementsByClassName("chanpin_banner_content03")[0];
    var content04=document.getElementsByClassName("chanpin_banner_content04")[0];
    var content05=document.getElementsByClassName("chanpin_banner_content05")[0];
    var content06=document.getElementsByClassName("chanpin_banner_content06")[0];
    var left_img=document.getElementsByClassName("left_img");
    var now_line_i=document.getElementsByClassName("now_line_i");
    var pre=document.getElementById("pre");
    /*console.log(pre);*/
    var next=document.getElementsByClassName("next")[0];
    var p1_text=document.getElementsByClassName("p1_text")[0].getElementsByTagName("p")[0];
    var p1_text02=document.getElementsByClassName("p1_text02")[0].getElementsByTagName("p")[0];
    var p1_text03=document.getElementsByClassName("p1_text03")[0].getElementsByTagName("p");
    var p1_text04=document.getElementsByClassName("p1_text04")[0].getElementsByTagName("p")[0];
    var p1_text05=document.getElementsByClassName("p1_text05")[0].getElementsByTagName("p");
    var p1_text06=document.getElementsByClassName("p1_text06")[0].getElementsByTagName("p")[0];
    var right_title=document.getElementsByClassName("right_title");
    var p2=document.getElementsByClassName("p2");
    var num=0;

    for(var f=0;f<now_line_one.length;f++){
        now_line_i[0].style.display="block";
        pre.onclick=function () {
            num--;
            if(num<0){
                num=5;
                now_line_i[5].style.display="block";
                now_line_i[1].style.display="none";
                now_line_i[2].style.display="none";
                now_line_i[3].style.display="none";
                now_line_i[4].style.display="none";
                now_line_i[0].style.display="none";

                content06.style.display="block";
                content01.style.display="none";
                content02.style.display="none";
                content03.style.display="none";
                content04.style.display="none";
                content05.style.display="none";
                left_img[5].style.animation="left_img 1s linear";
                p1_text06.style.animation="right_title 1s linear";
                right_title[5].style.animation="right_title 1s linear";
                p2[9].style.animation="right_title 1s linear";


            }
            else if (num==0){
                now_line_i[0].style.display="block";
                now_line_i[1].style.display="none";
                now_line_i[2].style.display="none";
                now_line_i[3].style.display="none";
                now_line_i[4].style.display="none";
                now_line_i[5].style.display="none";
                content01.style.display="block";
                content06.style.display="none";
                content02.style.display="none";
                content03.style.display="none";
                content04.style.display="none";
                content05.style.display="none";
                left_img[0].style.animation="left_img 1s linear";
                p1_text.style.animation="right_title 1s linear";
                right_title[0].style.animation="right_title 1s linear";
                p2[0].style.animation="right_title 1s linear";
                p2[1].style.animation="right_title 1s linear";
                p2[2].style.animation="right_title 1s linear";


            }
            else if (num==1){
                now_line_i[1].style.display="block";
                now_line_i[0].style.display="none";
                now_line_i[2].style.display="none";
                now_line_i[3].style.display="none";
                now_line_i[4].style.display="none";
                now_line_i[5].style.display="none";



                content02.style.display="block";
                content06.style.display="none";
                content01.style.display="none";
                content03.style.display="none";
                content04.style.display="none";
                content05.style.display="none";
                left_img[1].style.animation="left_img 1s linear";
                p1_text02.style.animation="right_title 1s linear";
                right_title[1].style.animation="right_title 1s linear";
            }
            else if (num==2){
                now_line_i[2].style.display="block";
                now_line_i[1].style.display="none";
                now_line_i[0].style.display="none";
                now_line_i[3].style.display="none";
                now_line_i[4].style.display="none";
                now_line_i[5].style.display="none";
                content03.style.display="block";
                content06.style.display="none";
                content02.style.display="none";
                content01.style.display="none";
                content04.style.display="none";
                content05.style.display="none";
                left_img[2].style.animation="left_img 1s linear";
                p1_text03[0].style.animation="right_title 1s linear";
                p1_text03[1].style.animation="right_title 1s linear";
                p1_text03[2].style.animation="right_title 1s linear";
                right_title[2].style.animation="right_title 1s linear";
                p2[3].style.animation="right_title 1s linear";
                p2[4].style.animation="right_title 1s linear";
                p2[5].style.animation="right_title 1s linear";
            }
            else if (num==3){
                now_line_i[3].style.display="block";
                now_line_i[1].style.display="none";
                now_line_i[2].style.display="none";
                now_line_i[0].style.display="none";
                now_line_i[4].style.display="none";
                now_line_i[5].style.display="none";
                content04.style.display="block";
                content06.style.display="none";
                content02.style.display="none";
                content03.style.display="none";
                content01.style.display="none";
                content05.style.display="none";
                left_img[3].style.animation="left_img 1s linear";
                p1_text04.style.animation="right_title 1s linear";
                right_title[3].style.animation="right_title 1s linear";
                p2[6].style.animation="right_title 1s linear";
            }
            else {
                now_line_i[4].style.display="block";
                now_line_i[1].style.display="none";
                now_line_i[2].style.display="none";
                now_line_i[3].style.display="none";
                now_line_i[0].style.display="none";
                now_line_i[5].style.display="none";
                content05.style.display="block";
                content06.style.display="none";
                content02.style.display="none";
                content03.style.display="none";
                content04.style.display="none";
                content01.style.display="none";
                left_img[4].style.animation="left_img 1s linear";
                p1_text05[0].style.animation="right_title 1s linear";
                p1_text05[1].style.animation="right_title 1s linear";
                p1_text05[2].style.animation="right_title 1s linear";
                right_title[4].style.animation="right_title 1s linear";
                p2[7].style.animation="right_title 1s linear";
                p2[8].style.animation="right_title 1s linear";
            }
        };
        next.onclick=function () {
            num++;
            if(num>5){
                num=0;
                now_line_i[0].style.display="block";
                now_line_i[1].style.display="none";
                now_line_i[2].style.display="none";
                now_line_i[3].style.display="none";
                now_line_i[4].style.display="none";
                now_line_i[5].style.display="none";
                content01.style.display="block";
                content06.style.display="none";
                content02.style.display="none";
                content03.style.display="none";
                content04.style.display="none";
                content05.style.display="none";
                left_img[0].style.animation="left_img1 1s linear";
                p1_text.style.animation="right_title1 1s linear";
                right_title[0].style.animation="right_title1 1s linear";
                p2[0].style.animation="right_title1 1s linear";
                p2[1].style.animation="right_title1 1s linear";
                p2[2].style.animation="right_title1 1s linear";
            }
            else if (num==5){
                now_line_i[5].style.display="block";
                now_line_i[1].style.display="none";
                now_line_i[2].style.display="none";
                now_line_i[3].style.display="none";
                now_line_i[4].style.display="none";
                now_line_i[0].style.display="none";

                content06.style.display="block";
                content01.style.display="none";
                content02.style.display="none";
                content03.style.display="none";
                content04.style.display="none";
                content05.style.display="none";
                left_img[5].style.animation="left_img1 1s linear";
                p1_text06.style.animation="right_title1 1s linear";
                right_title[5].style.animation="right_title1 1s linear";
                p2[9].style.animation="right_title1 1s linear";

            }
            else if (num==1){
                now_line_i[1].style.display="block";
                now_line_i[0].style.display="none";
                now_line_i[2].style.display="none";
                now_line_i[3].style.display="none";
                now_line_i[4].style.display="none";
                now_line_i[5].style.display="none";

                content02.style.display="block";
                content06.style.display="none";
                content01.style.display="none";
                content03.style.display="none";
                content04.style.display="none";
                content05.style.display="none";
                left_img[1].style.animation="left_img1 1s linear";
                 p1_text02.style.animation="right_title1 1s linear";
                right_title[1].style.animation="right_title1 1s linear";
            }
            else if (num==2){
                now_line_i[2].style.display="block";
                now_line_i[1].style.display="none";
                now_line_i[0].style.display="none";
                now_line_i[3].style.display="none";
                now_line_i[4].style.display="none";
                now_line_i[5].style.display="none";
                content03.style.display="block";
                content06.style.display="none";
                content02.style.display="none";
                content01.style.display="none";
                content04.style.display="none";
                content05.style.display="none";
                left_img[2].style.animation="left_img1 1s linear";
                p1_text03[0].style.animation="right_title1 1s linear";
                p1_text03[1].style.animation="right_title1 1s linear";
                p1_text03[2].style.animation="right_title1 1s linear";
                right_title[2].style.animation="right_title1 1s linear";
                p2[3].style.animation="right_title1 1s linear";
                p2[4].style.animation="right_title1 1s linear";
                p2[5].style.animation="right_title1 1s linear";
            }
            else if (num==3){
                now_line_i[3].style.display="block";
                now_line_i[1].style.display="none";
                now_line_i[2].style.display="none";
                now_line_i[0].style.display="none";
                now_line_i[4].style.display="none";
                now_line_i[5].style.display="none";
                content04.style.display="block";
                content06.style.display="none";
                content02.style.display="none";
                content03.style.display="none";
                content01.style.display="none";
                content05.style.display="none";
                left_img[3].style.animation="left_img1 1s linear";
                p1_text04.style.animation="right_title1 1s linear";
                right_title[3].style.animation="right_title1 1s linear";
                p2[6].style.animation="right_title1 1s linear";
            }
            else {
                now_line_i[4].style.display="block";
                now_line_i[1].style.display="none";
                now_line_i[2].style.display="none";
                now_line_i[3].style.display="none";
                now_line_i[0].style.display="none";
                now_line_i[5].style.display="none";

                content05.style.display="block";
                content06.style.display="none";
                content02.style.display="none";
                content03.style.display="none";
                content04.style.display="none";
                content01.style.display="none";
                left_img[4].style.animation="left_img1 1s linear";
                p1_text05[0].style.animation="right_title1 1s linear";
                p1_text05[1].style.animation="right_title1 1s linear";
                p1_text05[2].style.animation="right_title1 1s linear";
                right_title[4].style.animation="right_title1 1s linear";
                p2[7].style.animation="right_title1 1s linear";
                p2[8].style.animation="right_title1 1s linear";
            }
        };






        now_line_one[0].onclick=function () {
            content01.style.display="block";
            content02.style.display="none";
            content03.style.display="none";
            content04.style.display="none";
            content05.style.display="none";
            content06.style.display="none";

            now_line_i[0].style.display="block";
            now_line_i[1].style.display="none";
            now_line_i[2].style.display="none";
            now_line_i[3].style.display="none";
            now_line_i[4].style.display="none";
            now_line_i[5].style.display="none";
        };
        now_line_one[1].onclick=function () {
            content02.style.display="block";
            content01.style.display="none";
            content03.style.display="none";
            content04.style.display="none";
            content05.style.display="none";
            content06.style.display="none";

            now_line_i[1].style.display="block";
            now_line_i[0].style.display="none";
            now_line_i[2].style.display="none";
            now_line_i[3].style.display="none";
            now_line_i[4].style.display="none";
            now_line_i[5].style.display="none";
        };
        now_line_one[2].onclick=function () {
            content03.style.display="block";
            content01.style.display="none";
            content02.style.display="none";
            content04.style.display="none";
            content05.style.display="none";
            content06.style.display="none";

            now_line_i[2].style.display="block";
            now_line_i[1].style.display="none";
            now_line_i[0].style.display="none";
            now_line_i[3].style.display="none";
            now_line_i[4].style.display="none";
            now_line_i[5].style.display="none";
        };
        now_line_one[3].onclick=function () {
            content04.style.display="block";
            content01.style.display="none";
            content02.style.display="none";
            content03.style.display="none";
            content05.style.display="none";
            content06.style.display="none";

            now_line_i[3].style.display="block";
            now_line_i[1].style.display="none";
            now_line_i[2].style.display="none";
            now_line_i[0].style.display="none";
            now_line_i[4].style.display="none";
            now_line_i[5].style.display="none";
        };
        now_line_one[4].onclick=function () {
            content05.style.display="block";
            content01.style.display="none";
            content02.style.display="none";
            content03.style.display="none";
            content04.style.display="none";
            content06.style.display="none";

            now_line_i[4].style.display="block";
            now_line_i[1].style.display="none";
            now_line_i[2].style.display="none";
            now_line_i[3].style.display="none";
            now_line_i[0].style.display="none";
            now_line_i[5].style.display="none";
        };
        now_line_one[5].onclick=function () {
            content06.style.display="block";
            content01.style.display="none";
            content02.style.display="none";
            content03.style.display="none";
            content04.style.display="none";
            content05.style.display="none";

            now_line_i[5].style.display="block";
            now_line_i[1].style.display="none";
            now_line_i[2].style.display="none";
            now_line_i[3].style.display="none";
            now_line_i[4].style.display="none";
            now_line_i[0].style.display="none";
        };
    }




    var yewucontent_simple_logo=document.getElementsByClassName("yewucontent_simple_logo");
    var yewucontent_simple_bg=document.getElementsByClassName("yewucontent_simple_bg");
    var number=0;

     for(var k=0;k<yewucontent_simple_logo.length;k++){
         yewucontent_simple_logo[k].xunhao=k;



             yewucontent_simple_logo[k].onclick=function () {
                 var q=this.xunhao;
                 if(number==0){
                     yewucontent_simple_logo[q].style.backgroundPositionY="67px";
                     yewucontent_simple_logo[q].style.transition="all 1s";
                     yewucontent_simple_bg[q].style.animation="simple_bg 1s  forwards";

                 }
                 else if (number==1){
                     yewucontent_simple_logo[q].style.backgroundPositionY="0px";
                     yewucontent_simple_logo[q].style.transition="all 1s";
                     yewucontent_simple_bg[q].style.animation="simple_bg1 1s forwards";
                 }
                 number++;
                 if (number==2){
                     number=0
                 }




         }


     }

        /*团队介绍*/
        var team_move=document.getElementsByClassName("team_longer")[0];
        var left=document.getElementsByClassName("team_button_left")[0];
        var right=document.getElementsByClassName("team_button_right")[0];
        var spot=document.getElementsByClassName("team_button_spot")[0].getElementsByTagName("li");
        var big=document.getElementsByClassName("team_programmer")[0];
        var ad=0;
        var s;

        /*自动轮播*/
        s=setInterval(function () {
            ad++;
            if(ad==3){
                ad=0;
            }
            for(var k=0;k<spot.length;k++){
                spot[k].removeAttribute("style");
            }
            var b=ad*-1220;
            var c=ad*90;
            big.style.transform="translateX("+c+"px)";
            big.style.transition="all 0.5s";
            team_move.style.transform="translateX("+b+"px)";
            team_move.style.transition="all 1s 1s";
            spot[ad].style.backgroundColor="red";
        },10000);
        /*点击滑动图片*/
        right.onclick=function () {
            for(var j=0;j<spot.length;j++){
                spot[j].removeAttribute("style");
            }
            ad++;
            if(ad>2){
                ad=0;
            }
            var b=ad*-1220;
            var c=ad*90;
            big.style.transform="translateX("+c+"px)";
            big.style.transition="all 0.5s";
            team_move.style.transform="translateX("+b+"px)";
            team_move.style.transition="all 1s 1s";
            spot[ad].style.backgroundColor="red";

        };
        left.onclick=function () {
            for(var j=0;j<spot.length;j++){
                spot[j].removeAttribute("style");
            }
            ad--;
            if(ad<0){
                ad=2;
            }
            var b=ad*-1430;
            var c=ad*300;
            team_move.style.transform="translateX("+b+"px)";
            team_move.style.transition="all 1s ";
            big.style.transform="translateX("+c+"px)";
            big.style.transition="all 0.5s 1s";
            spot[ad].style.backgroundColor="red";

        };
        /*移入移出恢复*/
        right.onmouseover=function () {
            clearInterval(s);
        };
        left.onmouseover=function () {
            clearInterval(s);
        };
        right.onmouseout=function () {
            s=setInterval(function () {
                ad++;
                if(ad==3){
                    ad=0;
                }
                for(var k=0;k<spot.length;k++){
                    spot[k].removeAttribute("style");
                }
                var b=ad*-1220;
                var c=ad*90;
                big.style.transform="translateX("+c+"px)";
                big.style.transition="all 0.5s";
                team_move.style.transform="translateX("+b+"px)";
                team_move.style.transition="all 1s 1s";
                spot[ad].style.backgroundColor="red";
            },10000);
        };
        left.onmouseout=function () {
            s=setInterval(function () {
                ad++;
                if(ad==3){
                    ad=0;
                }
                for(var k=0;k<spot.length;k++){
                    spot[k].removeAttribute("style");
                }
                var b=ad*-1220;
                var c=ad*90;
                big.style.transform="translateX("+c+"px)";
                big.style.transition="all 0.5s";
                team_move.style.transform="translateX("+b+"px)";
                team_move.style.transition="all 1s 1s";
                spot[ad].style.backgroundColor="red";
            },10000);
        };


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


};
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
/*音乐点击*/
var qq=document.getElementsByClassName("music");
var yy=document.getElementsByTagName("audio");
for(var j=0;j<qq.length;j++){
    qq[j].index=j;
    qq[j].onclick=function () {
        var c=this.index;
        console.log(c);
        yy[c].play();
    }
}

