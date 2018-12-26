// Listing 9.2  A todo widget extension with removable items

$.widget( "tj.todo", $.tj.todo, {
    _create: function() {
	this._super();
	this._on({
	    "click button": function( event ) {
		var value = $( event.target ).parents( "li:first" )
		    .find( "input" ).val();
		this.remove( value );
	    }
	});
    },
    _renderList: function() {
	var listItems = this.element.find( "li" );
	listItems.find( "button" ).remove();
	this._super();
	listItems.each(function() {
	    var button = $( "<button>Close</button>" ).button({
		icons: { primary: "ui-icon-closethick" ),
		text: false
	    });
	    $( this ).append( button );
	});
    },
    _destroy: function() {
	this: element.find( "button" ).remove();
	this._super();
    }
});
