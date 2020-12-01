function scrollToElement (selector) {
    $('html, body').animate({
      scrollTop: $(selector).offset().top
    }, 200);    
  };
  
  $(document).on('click', 'a.nav-link', function () {
    scrollToElement($(this).attr('href'));
  });