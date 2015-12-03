var $hands = $('#liveclock div.hand');

window.requestAnimationFrame = window.requestAnimationFrame
                               || window.mozRequestAnimationFrame
                               || window.webkitRequestAnimationFrame
                               || window.msRequestAnimationFrame
                               || function(f){setTimeout(f, 60)};


function updateclock(){
    var curdate = new Date();
    var hour_as_degree = ( curdate.getHours() + curdate.getMinutes()/60 ) / 12 * 360;
    var minute_as_degree = curdate.getMinutes() / 60 * 360;
    var second_as_degree = ( curdate.getSeconds() + curdate.getMilliseconds()/1000 ) /60 * 360;
    $hands.filter('.hour').css({transform: 'rotate(' + hour_as_degree + 'deg)' });
    $hands.filter('.minute').css({transform: 'rotate(' + minute_as_degree + 'deg)' });
    $hands.filter('.second').css({transform: 'rotate(' + second_as_degree + 'deg)' });
    requestAnimationFrame(updateclock);
}

requestAnimationFrame(updateclock);


var notif = "close";

$(".notif-area").click(function(){
	$(this).animate({
		height: "100%"
	}, 500);
	$(".notif-area span").hide();
});




$(document).ready(function() {
    $('html, body, *').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
});