// Listing 9.3  A sortable todo widget

$.widget( "tj.todo", $.tj.todo, {
    options: {
	sortable: false
    },
    _create: function() {
	this._super();
	if ( this.options.sortable ) {
	    this.element.sortable();
	}
    },
    _setOption: function( key, value ) {
	this._super( key, value );
	if ( key === "sortable" ) {
	    if ( value ) {
		this.element.sortable();
	    }
	    if ( !value && this._isSortable() ) {
		this.element.sortable( "destroy" );
	    }
	}
    },
    _isSortable: function() {
	return this.element.is( ":data(ui-sortable)" );
    },
    _destroy: function() {
	if ( this._isSortable() ) {
	    this.element.sortable( "destroy" );
	}
	this._super();
    }
});
