document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("pesquisar").addEventListener("click", (event) => {
    let nome = document.getElementById("nome").value;
    nome = encodeURIComponent(nome);
    document.getElementById("corpo").innerHTML = "";
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${nome}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        response.results.forEach((element) => {
          document.getElementById("corpo").insertAdjacentHTML(
            "beforeend",
            `<form method='get' action='movie-details.html'>
              <input type='hidden' name='id' value='${element.id}'/>
              <button type='submit'><img width='60' src='${getImage(
                null,
                element.poster_path
              )}'/>${element.title}</button></form><br/>`
          );
        });
      })
      .catch((err) => console.error(err));
  });
});
