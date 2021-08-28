import React from "react";
import axios from "axios";

function axiosAPI() {
  //const axios = require("axios");

  function showOutput(res) {
    document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
  }

  return axios
    .get("https://imdb-api.com/en/API/Top250Movies/k_hha1j719")
    .then((res) => showOutput(res))
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);

        if (err.response.status === 404) {
          alert("Error: Page Not Found");
        }
      } else if (err.request) {
        console.error(err.request);
      } else {
        console.error(err.message);
      }
    });
}

export default axiosAPI;
