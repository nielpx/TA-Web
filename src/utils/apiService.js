import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_API_URL ||
  "https://grown-prepared-boxer.ngrok-free.app/";

class ApiContextService {
  #baseURL;
  #decode(token) {
    const value = JSON.parse(atob(token));
    return { token: value.key, role: value.role };
  }

  constructor(baseURL) {
    this.#baseURL = baseURL;
  }

  get(path, config = { isBasePath: false, token: null }) {
    if (!path.startsWith("/")) {
      path = "/" + path;
    }

    if (config.isBasePath) {
      path = "api" + path;
    }

    if (config.token) {
      const decodeToken = this.#decode(config.token);

      if (!config.isBasePath) path = decodeToken.role.toLowerCase() + path;

      return axios.get(this.#baseURL + path, {
        headers: {
          Authorization: decodeToken.token,
        },
      });
    } else {
      return axios.get(this.#baseURL + path);
    }
  }

  post(path, data = {}, config = { isBasePath: false, token: null }) {
    if (!path.startsWith("/")) {
      path = "/" + path;
    }

    if (config.isBasePath) {
      path = "api" + path;
    }

    if (config.token) {
      const decodeToken = this.#decode(config.token);

      if (!config.isBasePath) path = decodeToken.role.toLowerCase() + path;

      return axios.post(this.#baseURL + path, data, {
        headers: {
          Authorization: decodeToken.token,
        },
      });
    } else {
      return axios.post(this.#baseURL + path, data);
    }
  }

  put(path, data = {}, config = { isBasePath: false, token: null }) {
    if (!path.startsWith("/")) {
      path = "/" + path;
    }

    if (config.isBasePath) {
      path = "api" + path;
    }

    if (config.token) {
      const decodeToken = this.#decode(config.token);

      if (!config.isBasePath) path = decodeToken.role.toLowerCase() + path;

      return axios.put(this.#baseURL + path, data, {
        headers: {
          Authorization: decodeToken.token,
        },
      });
    } else {
      return axios.put(this.#baseURL + path, data);
    }
  }

  delete(path, config = { isBasePath: false, token: null }) {
    if (!path.startsWith("/")) {
      path = "/" + path;
    }

    if (config.isBasePath) {
      path = "api" + path;
    }

    if (config.token) {
      const decodeToken = this.#decode(config.token);

      if (!config.isBasePath) path = decodeToken.role.toLowerCase() + path;

      return axios.delete(this.#baseURL + path, {
        headers: {
          Authorization: decodeToken.token,
        },
      });
    } else {
      return axios.delete(this.#baseURL + path);
    }
  }

  form(path, data = {}, config = { isBasePath: false, token: null }) {
    if (!path.startsWith("/")) {
      path = "/" + path;
    }

    if (config.isBasePath) {
      path = "api" + path;
    }

    const formData = new FormData();

    for (const key of Object.keys(data)) {
      const value = data[key];
      if (value !== undefined && value !== null) {
        formData.append(key.toString(), value);
      }
    }

    if (config.token) {
      const decodeToken = this.#decode(config.token);

      if (!config.isBasePath) path = decodeToken.role.toLowerCase() + path;

      return axios.post(this.#baseURL + path, data, {
        headers: {
          Authorization: decodeToken.token,
          "Content-Type": "multipart/form-data",
        },
      });
    } else {
      return axios.post(this.#baseURL + path, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  }
}

const apiService = new ApiContextService(BASE_URL);

export default apiService;
