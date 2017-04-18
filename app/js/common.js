$(function() {

	$('.navigation .enabled').hover(function(){

        var self = $(this),
            selfId = self.attr('id');
		
		$('.sub').hover(
			function() {
			clearInterval(hideMenuTimer);
			},
			function() {
			$(this).hide();
			$('.enabled').removeClass('active');
			$('#' + selfId + '-sub').hide();
			}
		);



        showSubmenuTimer = setTimeout(function() {
            $('.sub').show();
			$('#' + selfId + '-sub').show();
        }, 2);

        curMenuitem = $(this);
        $(this).addClass('active');
    
        },
        function(){
			var self = this, id = $(this).attr('id');
			hideMenuTimer = setTimeout(function() {
				$('#' + id + '-sub').hide();
				$('.sub').hide();
				$(self).removeClass('active');
			}, 1);
			clearInterval(showSubmenuTimer);
        }
    );

    

});
