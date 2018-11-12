// Listing 3.5  Formatting dates with formatDate()

var date = new Date( 2014, 0, 2 );

$.datepicker.formatDate( "d / m / y", date );
$.datepicker.formatDate( "dd / mm / yy", date );
$.datepicker.formatDate( "dd-mm-yy", date );
$.datepicker.formatDate( "D M d, yy", date );
$.datepicker.formatDate( "DD M d, yy", date );
$.datepicker.formatDate( "DD MM d, yy", date );
