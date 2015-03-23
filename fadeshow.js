var fadeslide = {
	"fadeLength": 3000,
	"fadetype" : "fade",
	"pause": 10000
};

//Add standard height for container (.fadeshow)

var fsInit= function(){
	var images = $(".fadeshow img");
	images.css("opacity", 0);
	var fadeLength = fadeslide['fadeLength'];
	var pause = fadeslide['pause'];
	var count = images.length;
	var i = 0;

	images.eq(0).animate({opacity:1}, fadeLength);
	setTimeout(transition, pause);
	function transition(){
		images.eq(i).animate({opacity:0}, fadeLength);
		if(i++>=count-1)
			i=0;
		images.eq(i).animate({opacity:1}, fadeLength);
		setTimeout(transition, pause);
	}
}
