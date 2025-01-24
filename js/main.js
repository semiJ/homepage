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

    //coding 자동 슬라이드

    let panel = document.querySelectorAll(".codingDetail > li"), 
    bnnavi = document.querySelectorAll(".codingDetailnavi li");
    
    let total = panel.length - 1;
    
    let i = 0;

    function style(){
        for(let reItem of panel){
            reItem.classList.remove("view");
        }
        for(let againItem of bnnavi){
        againItem.classList.remove("bnlist");
        }

        panel[i].classList.add("view");
        bnnavi[i].classList.add("bnlist");
    }
    
    function slide(){
        start = setInterval(function(){
            if(i == total){
                i = 0;
            } else{
                i++;
            }
            style();
        }, 4000)
    }

    slide();

    // 네비 버튼
    bnnavi.forEach(function (item, index) {
        item.addEventListener("click",() => {
            clearInterval(start);

            i = index;
            
            style();
            slide();
        });
    })

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

    //content
   
    

    //footer
    $(window).on("scroll", function(){
        let viewTop = $(this).scrollTop();
        // console.log(viewTop);

        if(viewTop >= aboutme) {
            $(".topBtn").addClass("ftTopbtn");
        } else {
            $(".topBtn").removeClass("ftTopbtn");
        };
    });
})