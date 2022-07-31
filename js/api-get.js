var api_key = "?api_key=f93d84a232e65befaa774a77d5f12ba9";
var api_url_base = "https://api.themoviedb.org/3/";
var api_url_base_image = "https://image.tmdb.org/t/p/";
var api_language = "&language=pt-BR";

$(document).ready(function(){
    var api = getInfo("movie", "now_playing", null, true);
    $.getJSON(api, function (data) {
        $.each(data.results, function (i, item) {
            var caminho_imagem = "";
            $("<div class='lancamento' style='background-image: url(https://image.tmdb.org/t/p/w780/" + item.backdrop_path + ")'>" 
                + "<img src='https://image.tmdb.org/t/p/original/" + caminho_imagem + "'></img>" + item.title + "</div>").appendTo(".slick-main-lancamentos");
            return i < 5;
        })
        $('.slick-main-lancamentos').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            arrows: false
        });
    })
})

function getInfo (type, subcategory, item_id, language) {
    return `${api_url_base}${type}/${subcategory}/${item_id ? item_id + '/' : ''}${api_key}${language ? api_language : ''}`
}