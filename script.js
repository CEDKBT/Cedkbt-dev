$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  width: 47.9%;
  height: 200px;
  background-color: #EEF0F7;
  display: inline-block;
  border-radius: 10px;
  text-align: center;
  padding-top: 50px;
  transition: 0.5s;