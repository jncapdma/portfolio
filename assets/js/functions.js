// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnBackToTop").style.display = "block";
    } else {
        document.getElementById("btnBackToTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
     // $('html, body').animate({scrollTop:0}, 'slow');
     $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
}

