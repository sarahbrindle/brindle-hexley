jQuery(document).ready(function() {  
  var windowHeight = jQuery(window).height();
  var windowWidth = jQuery(window).width();
  //alert(windowHeight);
  if(windowWidth>1023){
          jQuery('.home-banner').css("height", windowHeight);
          var boxPadding = windowHeight / 3 ;
          boxPadding = Math.ceil(boxPadding);
          //jQuery('.home-banner-box').css("margin-top", '-'+boxPadding+'px');
          jQuery('.home-banner > .gb-inside-container').css("padding-top", boxPadding+"px");
  }
});
jQuery(document).ready(function() {
  jQuery('#masthead').scrollToFixed();
});

jQuery( document ).ready( function( $ ) {
    $( '.close-bar' ).on( 'click', function( e ) {
        e.preventDefault();

        $( 'body' ).css( 'transformY', '-145px' ); /* height of top bar */
    } );
} );

jQuery( document ).ready( function( $ ) {
    $( ".full-list" ).each(function( i ) {         
        if( $(this).length )         // use this if you are using id to check
        {
            $(this).children('li:gt(4)').hide();
        }
    });
    $( '.view-full-list' ).on( 'click', function( e ) {
        e.preventDefault();         
        $(this).parent().parent().find(".full-list").children('li:gt(4)').show();
        $(this).hide();
    } );
} );


jQuery( document ).ready( function( $ ) {
    //alert('hi');
    jQuery('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    jQuery('.popup-video .wp-block-button__link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    jQuery('.popup-video .gb-container-link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});