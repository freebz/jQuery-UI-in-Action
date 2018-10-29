// 2.3  Building a terms-of-use dialog

$( "#dialog" ).dialog({
    buttons: {
	OK: function() {
	    $( this ).dialog( "close" );
	}
    },
    beforeClose: function( event, ui ) {
	if ( !$( "#terms" ).prop( "checked" ) ) {
	    event.preventDefault();
	    $( "[for=terms]" ).addClass( "ui-state-error-text" );
	}
    }
});
