$(document).ready(function(){
	$('#music').click(function(){
		$("#logo").css({'top': '-15px','margin-left': '-2em', 'transform': 'translateX(-50%) scale(0.4)', '-webkit-transform': 'translateX(-50%) scale(0.4)', '-moz-transform': 'translateX(-50%) scale(0.4)', '-o-transform': 'translateX(-50%) scale(0.4)'});
		$("#content").html("<div id='sndcldplayer'><iframe width='100%' height='250' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/18824384&amp;color=000000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false'></iframe></div>");
		$("#music").addClass("selected", 1000);
		$("#merch").removeClass("selected");
		$("#about").removeClass("selected");
	});
	
	$('#merch').click(function(){
		$("#logo").css({'top': '-15px','margin-left': '-2em', 'transform': 'translateX(-50%) scale(0.4)', '-webkit-transform': 'translateX(-50%) scale(0.4)', '-moz-transform': 'translateX(-50%) scale(0.4)', '-o-transform': 'translateX(-50%) scale(0.4)'});
		$("#content").html("<p>I love tshirts.</p>");
		
		$("#music").removeClass("selected");
		$("#merch").addClass("selected");
		$("#about").removeClass("selected");
	});
	
	$('#about').click(function(){
		$("#logo").css({'top': '-15px','margin-left': '-2em', 'transform': 'translateX(-50%) scale(0.4)', '-webkit-transform': 'translateX(-50%) scale(0.4)', '-moz-transform': 'translateX(-50%) scale(0.4)', '-o-transform': 'translateX(-50%) scale(0.4)'});
		$("#content").html("<p>With Triple J favourites 'Heart in Motion' and 'Baguette' already establishing him as the disco wonder-kid of the Australian dance music scene, 20 year old Tyler Touché is set to take hold of 2016 with his signature sound. His tasteful blend of house and disco has already recieved support from names such as Motez, Gigamesh, Tensnake, The Magician, Moon Boots and The Superman Lovers. Having spent 2014/2013 on nationwide tours with Flight Facilities, Nina Las Vegas, Bluejuice, and securing spots on Falls Festival, Splendour in the Grass, Big Day Out and Listen Out, Tyler Touché is a name to remember.</p>");
		
		$("#music").removeClass("selected");
		$("#merch").removeClass("selected");
		$("#about").addClass("selected");
	});
	
	$('#logo').click(function(){
		$("#logo").css({'top': '50%', '-webkit-transform': 'translateY(-50%) translateX(-50%) scale(1)', '-moz-transform': 'translateY(-50%) translateX(-50%) scale(1)', '-o-transform': 'translateY(-50%) translateX(-50%) scale(1)', 'transform': 'translateY(-50%) translateX(-50%) scale(1)'});
		$("#content").html("");
		$("#music").removeClass("selected");
		$("#merch").removeClass("selected");
		$("#about").removeClass("selected");
	});
});