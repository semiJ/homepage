$(function(){
    $("nav .menuBar").on("click", function(){
        $(this).toggleClass("active");
        $("nav .subBack").toggleClass("viewControl");
        $("header").addClass("on");
    });

    gsap.registerPlugin(ScrollTrigger);

    // header 영역  
    let baseline = -600;
    
    let header = $("header").offset().top + baseline;
    let welcome = $("#welcome").offset().top + baseline;
    let aboutme = $("#aboutme").offset().top;
    let coding = $("#coding").offset().top + baseline;
    let aiDesign = $("#design").offset().top + baseline;
    let content = $("#content").offset().top + baseline;
    let footer = $("footer").offset().top + baseline;

    $(window).on("scroll", function(){
        let sc = $(this).scrollTop();

        if(sc >= 100) {
            $("header").addClass("on");
        } else {
            $("header").removeClass("on");
            $("nav .menuBar").removeClass("active");
            $("nav .subBack").removeClass("viewControl");
            $("header").stop().animate({"transition":"1s"});
        };
    });

    $("header .mainMenu li").on("click",function(){
        let i = $(this).index();
        let target = $("main section").eq(i).offset().top;
        
        $("html, body").stop().animate({scrollTop: target}, 1200);
    });

    $("header .subMenu li").on("click",function(){
        let i = $(this).index();
        let target = $("main section").eq(i).offset().top;
        
        $("html, body").stop().animate({scrollTop: target}, 1200);
    });

})