$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        margin:40
      }
    },
    {
      breakpoint: 772,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        margin: 40
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        margin: 40
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        margin: 40
      }
    }
  ]
});

var menuIcon=document.querySelector('.hamburger');
var links=document.querySelector('.links');
menuIcon.addEventListener('click', CollapseLinks);
function CollapseLinks(){
   links.classList.toggle('close-menu');
   menuIcon.addEventListener('click',crossMark);

}

function crossMark(){
  document.querySelector('.b1').classList.toggle('top-span');
  document.querySelector('.b2').classList.toggle('middle-span');
  document.querySelector('.b3').classList.toggle('bottom-span');
}