
$(function(){
    $('.hero-section').data('size','big');
});

function draw(){
    if($('.hero-section').data('size') == 'big')
    {
        window.scrollTo(0,0);
        $('.hero-section').data('size','small');
        $('.hero-section').stop().animate({
            height:'5%'
        },4000, function(){
          printAbout();    
        });
    }
    
    else
    {
        if($('.hero-section').data('size') == 'small')
        {
            $('.hero-section').data('size','big');
            $('.hero-section').stop().animate({
                height:'100%'},5000);
        }  
    }
};

function printAbout(){
    var pause = true;
    function printFirst(){
              var text = $('.name').data('text');
              var loc = '.name';
              pause = typeWriter(text,0,loc);
    }
    function printSecond(){
              var text1 = $('.para1').data('text');
              var loc1 = '.para1';
              typeWriter(text1,0,loc1);
    }
              var text2 = $('.para2').data('text');
              var loc2 = '.para2';
    printFirst();
    function waitForIt(){
        if (pause) {
            setTimeout(function(){waitForIt()},100);
        } else {
        printSecond();
        }
    }
}

function typeWriter(text, n, loc) {
  if (n < (text.length)) {
    $(loc).html(text.substring(0, n+1));
    n++;
    setTimeout(function() {
      typeWriter(text, n, loc)
    }, 20);
  }else{
      $('.main-section').css({"height":"100%"});
      console.log('DONE');
      return false;
  }
}