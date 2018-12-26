// Listing 9.1  Tas widget extension with an orientation option

$.widget( "tj.tabs", $.ui.tabs, {
    options: {
	orientation: "horizontal"
    },
    _create: fnction() {
	this._super();
	this._handleOrientation();
    },
    _handleOrientation: function() {
	this.element.toggleClass( "ui-tabs-vertical",
            this.options.orientation === "vertical" );
    },
    _setOption: function( key, value ) {
	this._superApply( arguments );
	if ( key === "orientation" ) {
	    this._handleOrientation();
	}
    },
    _destroy: function() {
	this._super();
	this.element.removeClass( "ui-tabs-vertical" );
    }
});
