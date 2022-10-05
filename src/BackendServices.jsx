// all API calls go here..

const backendBaseUrl = "http://127.0.0.1:8000";

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


