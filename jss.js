var mainText = $('h1#ll');
var boxes = $('.color');
var box1 = $('.up1');
var box2 = $('.up2');
var box3 = $('.down3');
var box4 = $('.down4');
var container = $('#container');

var num = 1;
var arr = [0, 1, 2, 3];
var randomArr = [];
var clickedArr = [];
var game;

$(document).on('keydown', function a(event) {
  if (event.key == 'a') {
    game = 'open';
    $('div.window').hide();
    container.removeClass('dark').css('background-color', 'white');
    mainText.html('Starting');
    setTimeout(function() {
      container.css('background-color', '#FEFBE7');
      mainText.html('Level ' + num);
      getRandomBox();
    }, 2000)

    $(document).off('keydown', a);
  }

});

function getRandomBox() {
  var randomNumber = Math.floor(Math.random() * arr.length);
  randomArr.push(randomNumber);
  var data = $(boxes[randomNumber]);
  setTimeout(function() {
    data.addClass('react');
    var audio = new Audio('files/mixkit-relaxing-bell-chime-3109.wav');
    audio.play();
  }, 1000);
  setTimeout(function() {
    data.removeClass('react');
  }, 1500);
  console.log(data.attr('data-letter'), randomArr);
}

// the game

boxes.each(function getCl() {
  $(this).on('click', function clc() {

if(game == 'open') {

    var m = $(this);

    $(this).addClass('react');
    setTimeout( function () {
    m.removeClass('react'); }, 500);

    clickedArr.push($(this).attr('data-letter')); console.log(clickedArr);


     if(isTrue(randomArr, clickedArr) == true) {

         if(isEqual(randomArr, clickedArr) == true) {
             num = num+1;
             mainText.html('Correct!').css('color', 'white');
             clickedArr.length = 0; console.log(clickedArr)
             new Audio('files/mixkit-choir-harp-bless-657.wav').play();
             container.css('background-color', 'green');
             setTimeout(function() {container.css('background-color', '#FEFBE7');
                                    mainText.css('color', '#006E7F');}, 500);
             setTimeout(function() {mainText.html('Level ' +num);
                     setTimeout(getRandomBox, 2000);}, 2000);
         } else {
             new Audio('files/mixkit-bell-sound-with-delay-585.wav').play();
             }

     } else {container.css('background-color', 'red');
             new Audio('files/mixkit-wrong-answer-bass-buzzer-948.wav').play();
             mainText.html('GAME OVER').css('color', 'white');
             m.off('click', clc);
             setTimeout(function () {
              mainText.animate({opacity: 0, 'html':'bel'}, 800);

            }, 2000);

             setTimeout(function() {
               mainText.html('press F5 to start');
               mainText.animate({opacity: 1}, 800);} ,3000)
           }


} else {
  container.css('background-color', 'red');
  setTimeout(function () {container.css('background-color', '#FEFBE7');}, 100);
}
  })
})


$(document).on('click', function mouse() {
  if(game == 'open') { $(document).off('click', mouse);}
  else {$('div.window').css('background-color', 'red');
  setTimeout(function () {$('div.window').css('background-color', '#541690');}, 100);
  new Audio('files/mixkit-wrong-answer-bass-buzzer-948.wav').play();}
});




function isTrue(arr, rr) {
  var iisTrue = [];
  for(var i = 0; i<arr.length; i++) {
  if(arr[i] == rr[i]){ iisTrue.push('yes');}
  else if(rr[i] == undefined) {iisTrue.push('not yet');}
  else if(arr[i] != rr[i]) {return false;}  }
  return true;
}


function isEqual(arr, rr) { return arr.length == rr.length; }
