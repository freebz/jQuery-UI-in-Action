// Listing 6.3  A message dialog with instructions

if ( !sessionStorage.getItem( "messageViewed" ) ) {
    $( "p" ).dialog({
	show: {
	    effect: "scale",
	    easing: "easeOutElastic",
	    duration: 0
	},
	hide: {
	    effect: "scale",
	    duration: 100
	},
	modal: true,
	title: "Fruit & Vegetable Sorter",
	width: 400,
	buttons: {
	    "OK": function() {
		$( this ).dialog( "close" );
	    }
	},
	close: function() {
	    sessionStorage.setItem( "messageViewed", true );
	}
    });
}
