// Listing B.1  Testing canceling the autocomplete's focus event

var data = [ "Clojure", "COBOL", "ColdFusion", "Java",
	     "JavaScript", "Scala", "Scheme" ];
asyncTest( "cancel focus", function() {
    expect( 1 );
    var customVal = "custom value",
	element = $( "#autocomplete" ).autocomplete({
	    delay: 0,
	    source: data,
	    focus: function() {
		$( this ).val( customVal );
		return false;
	    }
	});
    element.val( "js" ).keydown();
    setTimeout(function() {
	element.simulate ( "keydown", { keyCode: $.ui.keyCode.DOWN } );
	equal( element.val(), customVal );
	start();
    }, 50 );
});
