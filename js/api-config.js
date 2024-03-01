var api_key = ""; //key da api da sua aplicação no TMDB

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${api_key}`,
  },
};
