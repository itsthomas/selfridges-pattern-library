/**
 * Helper for simulating Scene7 responsive images in pattern library
 * Note: this is for demo purposes and not production code
 */

var optimiseImages = function (selector) {
  var thumbnails = document.querySelectorAll(selector);
  var isMobile = window.matchMedia('(max-width: 767px)').matches;

  thumbnails.forEach(function (thumb) {
    thumb.src = '/assets/img/' + (isMobile ? 'xs' : 'lg') + '/product.jpg';
  });
};

optimiseImages('.thumbnail');

window.onresize = function () {
  optimiseImages('.thumbnail');
};
