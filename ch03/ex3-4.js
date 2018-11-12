// Listing 3.4  An autocomplete of jQuery Git repositories on GitHub

$( "#autocomplete" ).autocomplete({
    minLength: 2,
    source: function( request, response ) {
	$.getJSON( "https://api.github.com/search/repositories",
		   { q: request.term + " in:name" })
	    .then( function( data ) {
		var matches = $.map( data.items, function( repo ) {
		    return repo.full_name;
		});
		response( matches );
	    });
    }
});
