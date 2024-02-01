import { TOKEN_VERIFY } from "../common";

const getToken = ({ key }) => {
  try {
    const tokens = JSON.parse(localStorage.getItem(key));
    return tokens;
  } catch (e) {
    return null;
  }
};

const clearToken = ({ key }) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    return false;
  }
};

const insertToken = ({ key, data }) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export { getToken, clearToken, insertToken };
