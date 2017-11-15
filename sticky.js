function sticky(mainElement, element, classStyle){
    
    $(window).scroll(function(){

        if(typeof mainElement === "number"){

            if ($(window).scrollTop() >= mainElement) {

                $(element).addClass(classStyle);

            }
            else {

                $(element).removeClass(classStyle);

            }
        } else {

            if ($(window).scrollTop() >= $(mainElement).offset().top) {

                $(element).addClass(classStyle);

            }
            else {

                $(element).removeClass(classStyle);

            }
        }

    }).scroll();

}