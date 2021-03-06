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

function menuIcon(){
  document.getElementById('head').classList.toggle('toggle-links');
  document.getElementById('hamburger').classList.toggle('toggle-menu');
}
