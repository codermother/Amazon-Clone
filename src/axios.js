import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-amaznclone-v1.cloudfunctions.net/api", //THE API (cloud function) URL

  //"http://localhost:5001/amaznclone-v1/us-central1/api"
});

export default instance;
