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

async function send_friend_request(url = "", access_token, friend_id) {
  const data = { id: friend_id };
  const response = await fetch(url + `/user/friends/requests/send`, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function get_friend_requests_to_user(url = "", access_token) {
  const response = await fetch(url + "/user/friends/requests/", {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.json();
}

async function accept_friend_request(url = "", access_token, friend_id) {
  const data = { id: friend_id };
  const response = await fetch(url + `/user/friends/requests/accept/`, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function get_friend_message_data(url = "", access_token, friend_id) {
  const response = await fetch(url + `/user/friends/${friend_id}/messages/`, {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

async function get_friend_last_message(url = "", access_token, friend_id) {
  const response = await fetch(
    url + `/user/friends/${friend_id}/messages/last/`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
}

async function send_message(url = "", access_token, friend_id, message_text) {
  const data = { content: message_text };
  console.log(data.content);
  const response = await fetch(url + `/user/friends/${friend_id}/messages/`, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
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
  send_friend_request,
  get_friend_requests_to_user,
  accept_friend_request,
  get_friend_message_data,
  get_friend_last_message,
  send_message,
};
