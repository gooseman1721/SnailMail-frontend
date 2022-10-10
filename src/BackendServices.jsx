// all API calls go here..

const backendBaseUrl = "http://127.0.0.1:7000";

async function postLoginRequest(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },

    body: new URLSearchParams({
      username: data.username,
      password: data.password,
    }),
  });
  return response.json();
}

async function get_fief_user(url = "", access_token) {
  const response = await fetch(url + "/fief_user/", {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
  return response.json();
}

export {backendBaseUrl, get_fief_user};

