document.getElementById("musicBtn").onclick = function ()
{
  var myaudio = document.getElementById("music");
  if (myaudio.paused == true)
  {
    document.getElementById("music").play();
    this.style.backgroundColor = "Blue";
    this.style.color = "White";
  }
      else if (myaudio.paused == false)
  {
    document.getElementById("music").pause();
    this.style.backgroundColor = "White";
    this.style.color = "Black";
  }
}

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 300,
  framesCount = 20;

anchors.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    let scroller = setInterval(function () {
      let scrollBy = coordY / framesCount;
      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});

var button = document.querySelector('#menuBtn')
var burger = document.querySelector('#burger')

button.addEventListener('click', function () {
  if (button) {
    burger.classList.add('burger-menu_active')
    button = false;
  }
  else {
    burger.classList.remove('burger-menu_active');
    button = true;
  }
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 800);
  });
});