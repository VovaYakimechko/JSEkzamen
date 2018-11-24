var $grid = $('.grid').isotope({
    itemSelector: '.image',
    layoutMode: 'fitRows'
});


var filterFns = {
    ium: function() {
        var name = $(this).find('.branding').text();
        return name.match( /1$/ );
    }
};


$('.filters-button-group').on( 'click', 'li', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'li', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
});

$('.team__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:true
});

$('.testimonial__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots:true,
    autoplay:true,
    autoplayspeed:4000

});


var marker = "";
var map = "";
function initMap() {
    var uluru = {lat: -25.344, lng: 131.036};
    map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    var marker = new google.maps.Marker({
        position: uluru,
        icon: "img/marker.png",
        map: map

    })
}

