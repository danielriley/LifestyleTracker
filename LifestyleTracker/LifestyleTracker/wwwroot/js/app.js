$("#AboutUsButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#AboutUs").offset().top
    }, 2000);
});

$("#JoinUsButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#JoinUs").offset().top
    }, 2000);
});

$("#GalleryButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#Gallery").offset().top
    }, 2000);
});

function mouseOver () {
    document.getElementById("mouse-over-example").src="assets/images/img1-2.jpg";
    console.log("working");
}

$('.img-gallery').click(function () {
    var clickedBtnImage = $(this).attr('src');
    $('#imageModal').modal('show');
    $('#modal-image').attr('src', clickedBtnImage);
});