$('.interface').on('click', function () {
  // console.log('Done');
  // console.log(this);
  // console.log($(this));
  // console.log($(this).attr('class'))
  if ($(this).hasClass("orange")) {
    console.log('Yes JQ orange');
    $('body').attr('class', 'orange');
    // $('body').toggleClass('orange');
    // $('body').css("background-color", 'orange');
    // $('body').css({
    //   "background-color": "orange"
    // });
    // $('p').css({
    //   "font-size": "30px"
    // });
  }

  if ($(this).hasClass('green')) {
    console.log('Yes JQ green');
    $('body').attr('class', 'green');
    // $('body').css({
    //   'background-color': 'green'
    // });

  }

  if ($(this).hasClass('increase')) {
    console.log('Yes JQ it has it');
    $('.text').animate({
      'font-size': '+=2px'
    }, 500)

  }

  if ($(this).hasClass('move')) {
    console.log('Yes JQ it has it');
    $('.text').animate({
      'left': '+=15px',
      'letter-spacing': '+=2px'
    }, 500)

  }

  // In JavaScript
  // if (this.classList.contains('green')) {
  //   console.log('Yes JS green')
  // }

})