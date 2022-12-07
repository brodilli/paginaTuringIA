window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider_lista_img"), {
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    dots: ".glider_indicador",
    arrows: {
      prev: ".glider_anterior",
      next: ".glider_siguiente",
    },
  });
  var splide = new Splide(document.querySelector(".splide"), {
    type: "loop",
    autoplay: true,
    interval: 2000,
    padding: {
      left: "15rem",
    },
  });
  splide.mount();
});
