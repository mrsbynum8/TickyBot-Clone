
$(".btn-cta, .btn-cta-bottom").hover(function() {
  $(".btn-cta img, .btn-cta-bottom img").toggleClass("imgHover");});

  AOS.init({duration: 1500});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; };

  

        //  $("#myBtn").delay(1000).animate({"opacity": "1"}, 1500);

        // <script>

    //  </script>