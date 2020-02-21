$(document).ready(function() {

  var $links = $("a[data-project-images]:not([data-project-images=''])");

var $modal = $('.modal').first();

console.log('Found ' + $links.length + ' project links');

$links.click(function() {
  var name = $(this).attr('data-project-name');
  var images = $(this).attr('data-project-images').split(' ');
  var mainImage = $(this).find('img').attr('src');
  var description = $(this).attr('data-project-info');

  console.log('Showing images: ' + images);

  // clear modal
  $modal.html('<a href="#" class="close">X</a>');

  // attach close listener
  $('a.close', $modal).click(closeModal);

  var s = "";

  // main image and info

  $modal
  .append('<h1>' + name + '</h1><p>' + description + '</p>')
  s += ('<div class="masonry">')
  s += ('<img src="' + mainImage + '">');

  // populate project images
  images.forEach(function(e) {
    // append inside
  s += ('<img src="' + e + '">');
  });

  $modal.append('</div>');
  $modal.append(s);

  // show modal
  $modal.addClass('show');
});

function closeModal() {
  console.log('Closing modal');
  $modal.removeClass('show');
}

  $('.popup-gallery').magnificPopup({
		delegate: 'a[data-project-images=""]',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});

});
