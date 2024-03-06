var api_key = getCookie("bearer") != "" ? getCookie("bearer") : ""; //key da api da sua aplicação no TMDB
var api_url_base = "https://api.themoviedb.org/3/";
var api_url_base_image = "https://image.tmdb.org/t/p/";
var api_language = "pt-BR";

if (api_key == "") {
  api_key = prompt("Enter bearer:");
  document.cookie = `bearer=${api_key}`;
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${api_key}`,
  },
};

function getInfo(type, subcategory, item_id, language) {
  return `${api_url_base}${type}${subcategory ? "/" + subcategory : ""}${
    item_id ? "/" + item_id : ""
  }${language ? `?language=${api_language}` : ""}`;
}

function getImage(width_size, img_path) {
  return `${api_url_base_image}/${
    width_size ? "w" + width_size : "original"
  }/${img_path}`;
}

function getCrew(item_id) {
  return `${api_url_base}/movie/${item_id}/credits`;
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
