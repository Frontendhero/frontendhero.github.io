(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    $('#mobile_collapse').click( function() {
      console.log('click');
      $('.container').toggleClass('show_mobile_nav');
    });
  });

})(jQuery, window, document);
