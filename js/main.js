$(function(){
    $("nav .menuBar").on("click", function(){
        $(this).toggleClass("active");
        $("nav .subBack").toggleClass("viewControl");
        $("header").addClass("on");
    });

    gsap.registerPlugin(ScrollTrigger);

    // header 영역  
    let baseline = -600;
    
    let header = $("header").offset().top;
    let welcome = $("#welcome").offset().top;
    let aboutme = $("#aboutme").offset().top - 100;
    let coding = $("#coding").offset().top;
    let aiDesign = $("#design").offset().top;
    let content = $("#content").offset().top;
    let footer = $("footer").offset().top;

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

    // aboutme 영역
    $(window).on("scroll", function(){
        let sc = $(this).scrollTop();

        if(sc >= aboutme || sc > coding) {
            $(".aboutRight").addClass("onAbout");
        } else {
            $(".aboutRightr").removeClass("onAbout");
        };
    });

    //coding 영역

    //design 영역
    // aiDesign

    let moveCard = gsap.utils.toArray("#design .moveCard li");
    
    gsap.to(moveCard,{
        xPercent: -100 * (moveCard.length - 5) ,
        scrollTrigger:{
            trigger: "#design",
            pin: true,
            scrub: 4,
            start : "center center",
            end :"200%",
            markers : false,
        },
    });
})