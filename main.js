$(function(){
    //////////////////////////////////////////////

    $("#Kim_portfolio").fullpage({

        anchors:['intro', 'p01', 'p02', 'p03', 'p04', 'p05', 'info'],
        afterLoad: function(origin, destination, direction){
            // console.log("여기는"+destination.index)//0,1,2...
            $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
            $("nav ul li").eq(destination.index).addClass("on").siblings().removeClass("on");
            
        },
    });



    $(".xi-pause.vod").on("click", function(){
            $(this).parent().parent().siblings().find("video").trigger("pause");
        });
    $(".xi-play.vod").on("click", function(){
            $(this).parent().parent().siblings().find("video").trigger("play");
        });

    

    $(".visual_slider").slick({
        arrows:false,
        dots:true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    


    $(".section i.xi-angle-right-min").on("click", function(){
        $(".visual_slider").slick("slickNext");
    });
    $(".section i.xi-angle-left-min").on("click", function(){
        $(".visual_slider").slick("slickPrev");
    });



    $("header .mopen").on("click", function(){
        $(this).toggleClass("on");
        $(".cover").toggleClass("on");
    });
    


    $(".cover li a").on("click", function(){
        $(".cover").removeClass("on");
        $("header .mopen").removeClass("on");
    });

     
//typing text info
    var options = {
        strings: ['Hi, My name is yerim'],
        typeSpeed: 60
      };
      
      var typed = new Typed('.intro_slogan .txt', options);








    ////////////////////////////////////////////////////
})