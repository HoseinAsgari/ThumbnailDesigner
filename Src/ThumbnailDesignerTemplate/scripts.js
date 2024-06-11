$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            smartSpeed: 500,
            loop: true,
            rtl: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 2,
                    nav: true
                }
            }
        });
});

function SendMail() {
    var mailmsg = document.getElementById('mail-msg').value;
    if (mailmsg != null && mailmsg != '') {
        var mailsub = document.getElementById('mail-sub').value;
        var mailname = document.getElementById('mail-name').value;
        var mail = 'hosein.asgari.00@gmail.com';
        var url = 'mailto:' + mail + '?subject=' + mailsub + '&body=from:' + mailname + " --- " + mailmsg;
        window.location.assign(url);
    }
}