// Flip an element on hover or on click
rh.test.flip = {
    attr: {
        trigger: "data-test-flip-on",
        visible: "data-test-visible"
    },
    action: function( $el, event ) {
        event.preventDefault();
        var cardClass = $el.attr( "class" ).split( " " ).pop();

        if ( $el.data( "card-view" ) === "front" ) {

            $el.hide();
            $( "#card-wrapper" ).find( "." + cardClass + "[data-card-view='back']" ).show();

        } else if ( $el.data( "card-view" ) === "back" ) {

            $el.hide();
            $( "#card-wrapper" ).find( "." + cardClass + "[data-card-view='front']" ).show();

        }
    }
};

// For all flip-enabled elements, attach an on click or on hover event
$( "[" + rh.test.flip.attr.trigger + "]", context ).each( function( idx, val ) {
    // Add your trigger event here

    if ( $( this ).data( "card-view" ) === "back" ) {
        $( this ).hide();
    }

    $( this ).on( "click", function( event ) {
        rh.test.flip.action( $( this ), event );
    } );

} );
