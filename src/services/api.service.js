const BASE_URL = "https://www.dictionaryapi.com/api/v3/references/sd3/json/";
const KEY = "c0d50870-63e8-4878-9257-8a4d8e590ab6";

export default {
  async definition(query) {
    const URL = BASE_URL + query + "?key=" + KEY;

    return await fetch(URL);
  },
};
