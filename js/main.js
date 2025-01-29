$(function(){
    $("nav .menuBar").on("click", function(){
        $(this).toggleClass("active");
        $("nav .subBack").toggleClass("viewControl");
        $("header").addClass("on");
    });

    gsap.registerPlugin(ScrollTrigger);

    // header 영역  
    let baseline = -200;
    
    let header = $("header").offset().top;
    let welcome = $("#welcome").offset().top;
    let aboutme = $("#aboutme").offset().top + baseline;
    let coding = $("#coding").offset().top;
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

        if(sc >= aboutme) {
            $(".aboutRight").addClass("onAbout");
        } else {
            $(".aboutRightr").removeClass("onAbout");
        };
    });

    //coding 자동 슬라이드

    let panel = document.querySelectorAll(".codingDetail > li"), 
    bnnavi = document.querySelectorAll(".codingDetailnavi li"),
    bnprev = document.querySelector("#coding .bnprev"),
    bnnext = document.querySelector("#coding .bnnext");
    
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
        }, 3000)
    };

    slide();

    // 다음, 이전 버튼
    bnnext.addEventListener("click", function() {
        clearInterval(start);
        if(i == total){
            i = 0;
        } else{
            i++;
        }

        style();
        slide();

    });
    
    bnprev.addEventListener("click", function() {
        clearInterval(start);
        if(i == 0){
            i = total;
        } else {
            i = --i;
        }

        style();
        slide();

    });

    // 네비 버튼
    bnnavi.forEach(function (item, index) {
        item.addEventListener("click",() => {
            clearInterval(start);

            i = index;
            
            style();
            slide();
        });
    });
    
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