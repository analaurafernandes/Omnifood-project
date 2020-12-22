$(document).ready(function(){
    /*for the sticky navigation*/
    $('.js--section-features').waypoint(function(direction){
        if(direction == "down")
        {
            $('nav').addClass('sticky');
        }
        else
        {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
        
    });
    
    /*scroll on buttons*/
    $('.js--scroll-to-plans').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    },{
        offset: '50%'
    });
    
    /*ANIMATIONS ON SCROLL*/
    $('.js--wp-1').waypoint(function(direction){
       $('.js--wp-1').addClass('animate__animated animate__fadeIn'); 
    },{
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction){
       $('.js--wp-2').addClass('animate__animated animate__slideInUp'); 
    },{
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction){
       $('.js--wp-3').addClass('animate__animated animate__fadeIn'); 
    },{
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    },{
        offset: '50%'
    })
    
    /*MOBILE NAVIGATION*/
    
    /*open and close nav*/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon')
        nav.slideToggle(200); /*200 milliseconds*/
        
        if(icon.attr("name") === "menu-outline" ){ //if the attribute name of icon is == to menu-outline
           icon.removeAttr("name"); //remove the name attribute
           icon.attr("name","close-outline") // add the name attribute again and set it === to close-outline
        }else {
            icon.removeAttr("name","close-outline") //remove attribute name === close-outline
            icon.attr("name","menu-outline") //add attribute name === menu-outline.
        }
    });
});