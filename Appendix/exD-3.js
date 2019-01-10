// Listing D.3  A timespinner widget

$.widget( "ui.timespinner", $.ui.spinner, {
    options: {
	step: 60 * 1000,
	page: 60
    },
    _parse: function( value ) {
	if ( typeof value === "string" ) {
	    if ( Number( value ) == value ) {
		return Number( value );
	    }
	    return +Globalize.parseDate( value );
	}
	return value;
    },
    _format: function( value ) {
	return Globalize.format( new Date( value ), "t" );
    }
});
