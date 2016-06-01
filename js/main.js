<!-- jQuery Spritely -->
		(function($) {
			$(document).ready(function() {
				$('#bg-01').pan({fps: 30, speed: 0.3, dir: 'right'});
				$('#asteroids').pan({fps: 30, speed: 0.6, dir: 'right'});
				$('#ani-alien-s1')
      .sprite({fps: 4, no_of_frames: 2})
      $('#ani-pixel-s4')
      .sprite({fps: 6, no_of_frames: 9})
      $('#ani-alien-s5')
      .sprite({fps: 4, no_of_frames: 4})
      });
      })(jQuery);
    
	<!-- jQuery Vertical Scroller -->
	$(document).ready(function() {
	$('a[href*=#]').bind("click", function(event) {
		event.preventDefault();
		var ziel = $(this).attr("href");
                if ($.browser.opera) {
                    var target = 'html';
                }else{
                    var target = 'html,body';
                }
		$(target).animate({
			scrollTop: $(ziel).offset().top
		}, 2000 , function (){location.hash = ziel;});
});
return false;
});
			<!-- jQuery Tweetable -->
		$(function(){
			$('#tweets').tweetable({username: 'pixelbaecker', time: true, limit: 1, replies: false, position: 'append'});
		}); 
   	<!-- jQuery Innerfade -->
	$(document).ready(
		function(){
			$('#feedback').innerfade({
				animationtype: 'fade',
				speed: 750,
				timeout: 14000,
				type: 'random',
				containerheight: 'auto'
			});
			$('#networks').innerfade({
						animationtype: 'slide',
						speed: 750,
						timeout: 6000,
						type: 'random',
						containerheight: '1.5em'
					});
		});
<!-- Addthis -->
var addthis_config = {"data_track_clickback":true}; 
var addthis_exclude = 'print';
var addthis_config = {
     ui_header_color: "#444444",
     ui_header_background: "#f2f2f2",
	ui_use_css: true,
	ui_click: true
}