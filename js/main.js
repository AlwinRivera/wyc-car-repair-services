$(function () {
  // Solid navbar after scrolling
  function onScroll() { $('#nav').toggleClass('scrolled', $(window).scrollTop() > 40); }
  onScroll();
  $(window).on('scroll', onScroll);

  // Close mobile menu after tapping a link
  $('#menu .nav-link, #menu .btn').on('click', function () { $('#menu').collapse('hide'); });

  // Gallery lightbox (Bootstrap modal)
  $('.gallery a').on('click', function (e) {
    e.preventDefault();
    $('#lightbox-img').attr({ src: $(this).attr('href'), alt: $(this).find('img').attr('alt') });
    $('#lightbox').modal('show');
  });

  $('#year').text(new Date().getFullYear());
});
