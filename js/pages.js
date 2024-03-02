$(document).ready(function () {
  const searchParams = new URLSearchParams(window.location.search);

  fetch(getInfo("movie", null, searchParams.get("id"), api_language), options)
    .then((data) => data.json())
    .then((data) => {
      document.querySelectorAll(".main-picture")[0].style.background =
        "url(" +
        getImage(1280, data.backdrop_path) +
        ") no-repeat center/cover";
      document.querySelectorAll(".poster")[0].src = getImage(
        null,
        data.poster_path
      );
      document.querySelectorAll(".ano")[0].innerHTML = data.release_date;
      document.querySelectorAll(".nome")[0].innerHTML = data.original_title;
      document.querySelectorAll(".detalhes")[0].innerHTML = data.overview;
    });
});
