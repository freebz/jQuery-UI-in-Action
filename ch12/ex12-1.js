// Listing 12.1  A notification widget

$.widget( "tj.notification", {
    options: {
	show: true,
	hide: true
    },
    _create: function() [
	this.button = $( "<button>Close</button>" )
	    .addClass( "tj-notification-button" )
	    .button({
		text: false,
		icons: { primary: "ui-icon-closethick" }
	    })
	    .appendTo( this.element );
	this._on( this.button, {
	    click: this.close
	});

	this.element
	    .addClass( "ui-widget ui-widget-content tj-notification" )
	    .position({
		my: "right-10 bottom-10",
		at: "right bottom",
		of: window
	    });
    },
    open: function() {
	this._show( this.element, this.options.show );
    },
    close: function() {
	this._hide( this.element, this.options.hide );
    }
});
