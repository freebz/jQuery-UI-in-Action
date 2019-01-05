// Listing 12.2  Declarative initialization of jQuery UI widgets

$.extend( $.Widget.prototype, {
    _getCreateOptions: function() {
	var option,
	    value,
	    options = {};

	for ( option in this.options ) {
	    value = this.element.data( option );
	    if ( value != null ) {
		options[ option ] = value;
	    }
	}
    }
});
