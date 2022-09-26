
jQuery(document).ready(function($) {
  function headerFixed() {
    $(window).scroll(function(){
      var $w = $(this),
          st = $w.scrollTop(),
          header = $('.header'),
          sd = $('body');

      if (st > 150) {
        if ( !header.hasClass('scrolled') ) {
          header.addClass('scrolled'); 
          //header.css({width: $('body').width()}); 
        }
      } 
      if (st < 150) {
        if ( header.hasClass('scrolled') ) {
          header.removeClass('scrolled sleep');
        }
      } 
      if ( st > 350 ) {
        if ( !header.hasClass('awake') ) {
          header.addClass('awake'); 
        }
        
        if(sd.length > 0) {
          sd.addClass('sleep');
        }
      }
      if ( st < 350 ) {
        if ( header.hasClass('awake') ) {
          header.removeClass('awake');
          header.addClass('sleep');
        }
        if(sd.length > 0) {
          sd.removeClass('sleep');
        }
      }
    });
  };
  headerFixed();
  
  function overlay(state) {
    var overlay = $('.overlay');
    if (overlay != undefined) {
      if (state == true) {
        overlay.addClass('overlay--active');
      } else if (state == false) {
        overlay.removeClass('overlay--active');
      }
    }
  }
  
  function scrollFreeze(state) {
    var body = $('body');
    if (body != undefined) {
      if (state == true) {
        body.removeClass('fixed');
      } else if (state == false) {
        body.addClass('fixed');
      }
    }
  }

  function headerMobile() {
    var headerBurger = $('.header__burger');
    var headerMobile = $('.header-mobile');
    var headerMobileClose = $('.header-mobile__close');
    var links = headerMobile.find('.nav__link');

    function close() {
      if (headerMobile != undefined) { 
        headerMobile.removeClass('header-mobile--active');
        overlay(false);
        scrollFreeze(true);
      }
    }
    if (headerBurger != undefined) {
      headerBurger.on('click', function() {
        if (headerMobile != undefined) {  
          headerMobile.addClass('header-mobile--active');
          overlay(true);
          scrollFreeze(false);
        }
        
      });
    }
    if (headerMobileClose != undefined) {
      headerMobileClose.on('click', function() {
        close();
      });
    }
    if (links.length > 0) {
      links.on('click', function() {
        close();
      });
    }
  }
  headerMobile();

  function quiz() {
    var prev = $('.quiz__prev');
    var next = $('.quiz__next');
    var steps = $('.quiz__step');
    var quizLine = $('.quiz__line-fill');
    var quizStepsInfo = $('.quiz__count');
    var count = steps.length;
    var percent = 100 / count;
    var currentStep = 1;

    function quizSteps() {
      if (quizStepsInfo != undefined) {
        quizStepsInfo.text(currentStep + '/' + count);
      }
    }
    quizSteps();

    function line() {
      var currentPrecent = percent * currentStep;

      if (quizLine != undefined) {
        quizLine.css({'width': currentPrecent + "%"});
      }
    }
    line();

    function stepsVisible(key) {
      if (steps.length > 0) {
        steps.each(function(key, step) {
          step.style.display = 'none';
        });
        if (steps[key-1] != undefined) {
          steps[key-1].style.display = 'block';
        }
      }
    }
    
    if (prev != undefined) {
      prev.click(function() {
        if (currentStep <= 1) {
          currentStep = 1;
        } else {
          currentStep--;
        }
        stepsVisible(currentStep);
        line();
        quizSteps();
      });
    }
    if (next != undefined) {
      next.click(function() {
        if (currentStep >= count) {
          currentStep = count;
        } else {
          currentStep++;
        }
        
        stepsVisible(currentStep);
        line();
        quizSteps();
      });
    }
  }
  quiz();

  var navLinks = $('.nav__link');

  navLinks.click(function() {
    var id = $(this).attr('href');
    if ($( window ).width() < 991) {
      var top = 160;
    } else {
      var top = 60;
    }
    $('html, body').animate({
      scrollTop: $(id).offset().top - top // класс объекта к которому приезжаем
    }, 500); // Скорость прокрутки
    
  });
  
  const myModal = new HystModal({
      linkAttributeName: "data-hystmodal",
  });
});
