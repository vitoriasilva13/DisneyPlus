$(document).ready(function () {
  var api_main_slick = getInfo("movie", "now_playing", null, true);
  console.log(api_main_slick);
  fetch(api_main_slick, options)
    .then((data) => data.json())
    .then((data) => {
      $.each(data.results, function (i, item) {
        var caminho_imagem = "";
        $(
          "<div class='lancamento' style='background-image: url(" +
            getImage(780, item.backdrop_path) +
            ")'>" +
            item.title +
            "</div>"
        ).appendTo(".slick-main-lancamentos");
        return i < 5;
      });
      $(".slick-main-lancamentos").slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: true,
        dotsClass: "paginacao",
        appendDots: ".lancamento",
      });
    })
    .catch((err) => console.error(err));

  var api_slick_popular = getInfo("movie", "popular", null, true);
  fetch(api_slick_popular, options)
    .then((data) => data.json())
    .then((data) => {
      $.each(data.results, function (i, item) {
        var caminho_imagem = "";
        $(
          "<form method='get' action='pages/movie-details.html'><div class='lancamento' style='background-image: url(" +
            getImage(780, item.backdrop_path) +
            ")'>" +
            "<input type='hidden' name='id' value='" +
            item.id +
            "'/><button type='submit'>" +
            item.title +
            "</button></div></form>"
        ).appendTo(".slick-popular");
        return i < 20;
      });
      $(".slick-popular").slick({
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-arrow slick-prev"><i class="fa-solid fa-arrow-left i"></i></button>',
        nextArrow:
          '<button type="button" class="slick-arrow slick-next"><i class="fa-solid fa-arrow-right i"></i></button>',
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });
    })
    .catch((err) => console.error(err));
});
