var api_url_base = "https://api.themoviedb.org/3/";
var api_url_base_image = "https://image.tmdb.org/t/p/";
var api_language = "en-US";

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
            /*+ "<img src='https://image.tmdb.org/t/p/original/" + caminho_imagem + "'></img>"*/ item.title +
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
          "<div class='lancamento' style='background-image: url(" +
            getImage(780, item.backdrop_path) +
            ")'>" +
            /*+ "<img src='https://image.tmdb.org/t/p/original/" + caminho_imagem + "'></img>"*/ item.title +
            "</div>"
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

function getInfo(type, subcategory, item_id, language) {
  return `${api_url_base}${type}/${subcategory}${
    item_id ? `/${item_id}` + "/" : ""
  }${language ? `?language=${api_language}` : ""}&page=1`;
}

function getImage(width_size, img_path) {
  return `${api_url_base_image}/${
    width_size ? "w" + width_size : original
  }/${img_path}`;
}
