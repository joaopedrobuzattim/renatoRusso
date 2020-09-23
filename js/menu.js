$(()=>{

    moveScroll();

    headerBg();

    function moveScroll(){
        $('nav ul li a').click(function (e) {

            e.preventDefault();
            let sectionName = $(this).attr('goto');
            let sectionOffY = $(`section.${sectionName}`).offset().top;
            $('html,body').animate({'scrollTop': sectionOffY});
        })
    }

    function headerBg(){
        let parallax = $('.header-master-parallax').height() -50;
        let parallaxHeader = $('.parallax-filter header');

        
        parallaxHeader.hover(function () {
            $(this).css('background-color','black');
        },function () {
            if($(window).scrollTop() >= parallax) return;
            $(this).css('background-color','transparent');
        })

        $(window).scroll(function () {

            if($(window).scrollTop() <= parallax ){
                parallaxHeader.css('background-color','transparent');
            } else{
            parallaxHeader.css('background-color','black');
            }
        })
    }
    

})