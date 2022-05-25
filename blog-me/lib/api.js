import querystring from 'querystring';

export async function getRefreshToken() {
  const refresh_token = process.env.NEXT_PUBLIC_REFRESH_TOKEN;
  const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
  const auth = process.env.NEXT_PUBLIC_AUTHORIZATION;
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  const token_link = "https://accounts.spotify.com/api/token";

  const formBody = new URLSearchParams({
    grant_type: 'authorization_code',
    code: refresh_token,
    redirect_uri: 'http://localhost:3000/'
  });

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody.toString(),
    json: true
  });
  const data = await res.json();
  const Tokens = data;
  console.log(Tokens);
  // console.log(refresh_token);
  return {Tokens};
}

export async function getAccessToken() {
  // const refresh_token = process.env.NEXT_PUBLIC_REFRESH_TOKEN;
  const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
  // const auth = process.env.NEXT_PUBLIC_AUTHORIZATION;
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  // const token_link = "https://accounts.spotify.com/api/token";

  const formBody = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: process.env.NEXT_PUBLIC_REFRESH_TOKEN
  });

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody.toString(),
    json: true
  });

  const data = await res.json();
  // const access_token = data;
  //console.log(access_token);
  return data;
}

  // Helper to make GET requests to Strapi
  export async function fetchAPI(type, accessToken) {
    const res = await fetch(`https://api.spotify.com/v1/${type}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'time-range': 'short_term'
      }
    });
    const data = await res.json();
    // const spotify = data;
    return data;
  }

  export function getStrapiURL(path = "") {
    return `${
      process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
  }