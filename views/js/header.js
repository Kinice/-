$(function(){

});
$(document).scroll(function(){
    if(getScrollTop() <= 200){
        $('.back-to-top').fadeOut();
    }else if(getScrollTop() >= 200){
        //Back To Top
        $('.back-to-top').fadeIn();
    }
});
$('.back-to-top').click(function(){
    $('html,body').animate({
        scrollTop: 0
    },500);
});

function getScrollTop(){
    return $(document).scrollTop();
}
function backOne(){
    window.history.go(-1);
}
$('.pin').click(function() {
    var $pin = $(this);
    var $hd = $('.g-hd');
    if($hd.css('position')=='absolute'){
        dispFixed($hd);
        $pin.css({
            'transform':'rotate(-90deg)',
            'color':'#fff'
        });
    }else{
        dispAbsolute($hd);
        $pin.css({
            'transform':'rotate(0deg)',
            'color':'#f26651'
        });
    }
});
$('.pic img').click(function() {
    if($(this).attr('alt')=='s'){
        $(this).attr('alt','b');
        $(this).css('width','100%');
    }else{
        $(this).attr('alt','s');
        $(this).css('width','200');
    }
});
function dispAbsolute(element){
    element.css('position','absolute');
}
function dispFixed(element){
    element.css('position','fixed');
}