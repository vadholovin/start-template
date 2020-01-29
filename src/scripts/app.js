/* eslint-disable */
/**
 * #SVG4EVERYBODY
 */
(function ($) {
  svg4everybody({});
})(jQuery);

/**
 * #PREVENT VIDEO-BACKGROUND LOADING ON MOBILE AND TABLET
 */
(function ($) {
  if(!isMobile.any) {
    $('.js-video-bg source').each(function () {
      $(this).attr('src', $(this).data('src'));
    });

    if (!!document.body.querySelector('.js-video-bg')) {
      document.querySelector('.js-video-bg').load();
    }
  }
  
})(jQuery);

/**
 * #HEADER SCROLL
 */
(function ($) {
  $(window).scroll(function() {
    let offsetY = $(window).scrollTop();

    if ( offsetY > 150) {
      $('.header').addClass('is-scrolled');
      $('body').addClass('is-header-scrolled');
    } else if ( offsetY < 150) {
      $('.header').removeClass('is-scrolled');
      $('body').removeClass('is-header-scrolled');
    }
  });
})(jQuery);

/**
 * #MENU
 */
(function ($) {
  $('.js-menu-toggler').click(function (e) { 
    e.preventDefault();
    $('.mobile-nav').toggleClass('is-open');
    $('.page-mask').toggleClass('is-visible');
    $('body').toggleClass('is-nav-mobile-open');
  });

  $('.js-mobile-nav-close, .js-page-mask').click(function (e) { 
    e.preventDefault();
    $('.mobile-nav').removeClass('is-open');
    $('.page-mask').removeClass('is-visible');
    $('body').removeClass('is-nav-mobile-open');
  });
})(jQuery);

/**
 * #SLIDERS
 */
(function ($) {
  // Clients slider
  $('.top-banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    mobileFirst: true,
    dots: true,
    prevArrow: $('.js-top-banner-controls [class*=prev]'),
    nextArrow: $('.js-top-banner-controls [class*=next]'),
  });

  // Clients slider
  $('.js-clients-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    mobileFirst: true,
    prevArrow: $('.js-clients-controls [class*=prev]'),
    nextArrow: $('.js-clients-controls [class*=next]'),
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
    ]
  });

  // Team slider
  $('.js-team-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    speed: 300,
    mobileFirst: true,
    prevArrow: $('.js-team-controls [class*=prev]'),
    nextArrow: $('.js-team-controls [class*=next]'),
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
    ]
  });

  $(window).on('resize', function() {
    $('.js-clients-slider, .js-team-slider').slick('resize');
});

})(jQuery);


/**
 * #SEARCH FORM
 */

(function ($) {
  const hideSearch = () => {
    $('.header-search').removeClass('is-open');
    $('.js-search-toggler').prop('hidden', false);
  }

  $('.js-search-toggler').click(function (e) { 
    e.preventDefault();
    $('.header-search')
      .addClass('is-open')
      .find('.header-search__input').focus();
    $(this).prop('hidden', true);
  });

  $('.header-search__input').focusout(function (e) {
    hideSearch();
  });

  $('.js-search-close').click(function (e) { 
    e.preventDefault();
    hideSearch();
  });
})(jQuery);

/**
 * #HIDDING FORM LABELS
 */
(function ($) {
  $('.inputbox').mouseover(function () {
    let label = $(this).find('.inputbox__label--placeholder');
    if (!label.is('is-hidden')) {
      label.addClass('is-hidden');
    }
  });

  $('.inputbox').mouseleave(function () { 
    let label = $(this).find('.inputbox__label--placeholder');
    let input = $(this).find('.input');
    if (!input.val() && !input.is(':focus')) {
      label.removeClass('is-hidden');
    }
  });

  $('.input').focus(function (e) { 
    e.preventDefault();
    let label = $(this).parents('.inputbox').find('.inputbox__label--placeholder');
    label.addClass('is-hidden');
  });

  $('.input').focusout(function (e) { 
    e.preventDefault();
    let label = $(this).parents('.inputbox').find('.inputbox__label--placeholder');
    if (!$(this).val()) {
      label.removeClass('is-hidden');
    }
  });
})(jQuery);

/**
 * #INPUTMASK
 */
(function () {
  const inputmask = () => {
    Inputmask({
      mask: '+7 (999) 999 99 99',
    }).mask('input[data-type="tel"]');
  
    Inputmask({
      alias: 'email',
    }).mask('input[data-type="email"]');
  }

  inputmask();
})();

/**
 * #SHOW ALL PRACTICES
 */
(function ($) {
  $('.js-practices-more').click(function (e) { 
    e.preventDefault();
    $('.practices-list').find('[class*=grid__col]:hidden').removeClass('u-hidden');
    $(this).hide();
  });
})(jQuery);

/**
 * #MICROMODAL
 */
(function ($) {
  MicroModal.init({
    onShow: function () {
      $('body').addClass('is-modal-open');
    },
    onClose: function () {
      $('body').removeClass('is-modal-open');
    },
  });
})(jQuery);