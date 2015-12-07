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

/* Notification Module Animation 
	- allows users to slide the notif bar (by clicking the
	notif bar) and shows BYTES notif to user
*/
var notif_opened = true;	// flag for checking if the notif bar is slided down

$(".notif-area #notif_bar").hide();
$(".notif-area #span2").hide();

$(".notif-area").click(function(){
	if(notif_opened){	// if user wants to slide down the notif bar
		$(".notif-area span").hide();
		$("#bg_photo").fadeOut(200);
		$("#footer_bar").fadeOut(200);
		$(this).animate({
			height: "100%"
		}, 500);
		$(".notif-area #notif_bar").show();
		$(".notif-area #span2").show();
		notif_opened = false;
	}
	else{	// if user closes the notif bar
		$(".notif-area #notif_bar").hide();
		$(".notif-area #span2").hide();
		$(this).animate({
			height: "20px"
		}, 500);
		$(".notif-area span").show();
		$("#bg_photo").fadeIn(500);
		$("#footer_bar").fadeIn(500);
		notif_opened = true;
	}
});

// end of notif animation

var rect;

$("#addtask").hide();

var task = "close";

$(".schedcell").click(function(){
	
	$("#addtask").css("left", " " + 0);
	$("#addtask").css("right", " " + 0);


	if(task == "close"){
		rect = this.getBoundingClientRect();
		if(rect.left < 1000){
			$("#addtask").css("left", " " + (rect.left + 150));
		} else {
			$("#addtask").css("right", " " + (rect.right));
		}

		$("#addtask").css("top", " " + (rect.top - 40));
		$("#addtask").fadeIn();
		task ="open";
		$(this).addClass("selected");
	} else {
		$("#addtask").fadeOut();
		task = "close";
		$(".selected").removeClass("selected");
	}
});


// :eq - select
// .index - get
