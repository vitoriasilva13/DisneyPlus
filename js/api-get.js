var api_key = "?api_key=f93d84a232e65befaa774a77d5f12ba9";
var api_url_base = "https://api.themoviedb.org/3/";
var api_url_base_image = "https://image.tmdb.org/t/p/";
var api_language = "";

$(document).ready(function () {
  var api_main_slick = getInfo("movie", "now_playing", null, true);
  $.getJSON(api_main_slick, function (data) {
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
  });
  var api_slick_popular = getInfo("movie", "popular", null, true);
  $.getJSON(api_slick_popular, function (data) {
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
  });
});

function getInfo(type, subcategory, item_id, language) {
  return `${api_url_base}${type}/${subcategory}/${
    item_id ? item_id + "/" : ""
  }${api_key}${language ? api_language : ""}`;
}

function getImage(width_size, img_path) {
  return `${api_url_base_image}/${
    width_size ? "w" + width_size : original
  }/${img_path}`;
}
