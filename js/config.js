var api_key = document.cookie != "" ? document.cookie : ""; //key da api da sua aplicação no TMDB
var api_url_base = "https://api.themoviedb.org/3/";
var api_url_base_image = "https://image.tmdb.org/t/p/";
var api_language = "en-US";
debugger
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
