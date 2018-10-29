// Listing 2.1  Building an editable list

$( "#dialog" ).dialog({
    autoOpen: false,
    buttons: {
	Update: function() {
	    var firstName = $( "#firstName" ).val(),
		lastName = $( "#lastName" ).val(),
		row = $( this ).data( "editingRow" );

	    row.find( "td" ).eq( 1 ).text( firstName );
	    row.find( "td" ).eq( 2 ).text( lastName );
	    $( this ).dialog( "Close" );
	},
	Cancel: function() {
	    $( this ).dialog( "close" );
	}
    }
});

$( "table" ).on( "click", "button", function() {
    var row = $( this ).parents( "tr" ),
	firstName = row.find( "td" ).eq( 1 ).text(),
	lastName = row.find( "td" ).eq( 2 ).text(),
	admin = row.find( "td" ).eq( 3 ).text() === "Yes";

    $( "#firstName" ).val( firstName );
    $( "#lastName" ).val( lastName );

    $( "#dialog" )
	.dialog( "option", {
	    title: "Editing " + firstName + " " + lastName,
	    dialogClass: admin ? "admin" : ""
	})
	.data( "editingRow", row )
	.dialog( "open" );
});
