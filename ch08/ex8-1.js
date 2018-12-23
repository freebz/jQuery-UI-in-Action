// Listing 8.1  Using the pseudo-class created by the widget factory

$.widget( "tj.todo", {} );

var ul = $( "<ul>" ).appendTo( "body" );
ul.todo();
console.log( $( ":tj-todo" ) );
console.log( ul.is( ":tj-todo" ) );
