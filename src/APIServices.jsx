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
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.json();
}

async function get_fief_user_react_fetch(url = "", access_token) {
  const response = await fetch(url + "/fief_user/", {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.json();
}

async function get_data_after_user_login(url = "", access_token) {
  const response = await fetch(url + "/user_login_and_get_data/", {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.json();
}

async function get_user_friends(url = "", access_token) {
  const response = await fetch(url + "/user/friends/", {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.json();
}

async function get_friends_to_display(url = "", access_token) {
  const response = await fetch(url + "/users/all/", {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.json();
}

export {
  backendBaseUrl,
  get_fief_user,
  get_data_after_user_login,
  get_fief_user_react_fetch,
  get_user_friends,
  get_friends_to_display,
};
