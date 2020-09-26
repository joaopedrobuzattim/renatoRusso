$(()=>{

        moveScroll();
        slideMobileMenu();
        menuHeaderBg();

    

    function moveScroll(){
        $('nav ul li a').click(function (e) {

            e.preventDefault();
            let sectionName = $(this).attr('goto');
            let sectionOffY = $(`.${sectionName}`).offset().top;
            $('html,body').animate({'scrollTop': sectionOffY});
        })
    }

    function menuHeaderBg(){

        let header = $('.parallax-filter header');

        if($('.menu-mobile-icon').css('display') != 'none'){
            header.css('background-color','black');
            return;
        }

        header.hover(function () {
            $(this).css('background-color','black');
        },function () {

            if($(window).scrollTop() >= 10) return;
            $(this).css('background-color','transparent');
        })

        $(window).scroll(function () {

            if($(window).scrollTop() <= 10 ){
                header.css('background-color','transparent');
            } else{
            header.css('background-color','black');
            }
        })
    }   
    
    function slideMobileMenu(){
        $('.menu-mobile-icon i').click(function (){
            $('.mobile-menu').slideToggle();
        })
    }

})