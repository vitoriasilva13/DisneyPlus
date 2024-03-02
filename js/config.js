var api_key =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTNkODRhMjMyZTY1YmVmYWE3NzRhNzdkNWYxMmJhOSIsInN1YiI6IjYyZTEyODliNWNhNzA0MjYxYWVmZGQxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AfQeYfMCf2wYdaqE7fGmOQKkyGwCvzcvuMDIUitvAc0"; //key da api da sua aplicação no TMDB
var api_url_base = "https://api.themoviedb.org/3/";
var api_url_base_image = "https://image.tmdb.org/t/p/";
var api_language = "en-US";

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
