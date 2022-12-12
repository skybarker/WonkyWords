const BASE_URL_DICTIONARY =
  "https://www.dictionaryapi.com/api/v3/references/sd3/json/";
const KEY = "c0d50870-63e8-4878-9257-8a4d8e590ab6";
const BASE_URL_JSON_SERVER = "http://localhost:3001/";

export default {
  async definition(query) {
    const URL = BASE_URL_DICTIONARY + query + "?key=" + KEY;
    const response = await fetch(URL);
    return response.json();
  },

  async getAllUsers() {
    const URL = BASE_URL_JSON_SERVER + "users";
    const response = await fetch(URL);
    return response.json();
  },

  async getUser(username, password) {
    const URL =
      BASE_URL_JSON_SERVER +
      "users?username=" +
      username +
      "&password=" +
      password;
    const response = await fetch(URL);
    return response.json();
  },

  async createUser(user) {
    const URL = BASE_URL_JSON_SERVER + "users";
    await fetch(URL, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    });
  },

  async getAllStories() {
    const URL = BASE_URL_JSON_SERVER + "stories";
    const response = await fetch(URL);
    return response.json();
  },
};
