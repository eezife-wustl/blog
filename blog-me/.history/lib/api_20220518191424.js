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
    code: 'AQCCfmKO60w0TtlbXvOkPotVdwF6CrXb8mGxCydl6dpGenKf-tn84aLDX_qJ79BT11_Su80GYmO1YzEGQebdHwUViwh8I-gtgf-plASYzOSBXedwQOt8AmaDp5bxJYWmlu7Hf2Hl2Tq85TrJ1IcLhrV3Sz-tBA1O1L4wvhCbjhixqdci_2oIJRazMM06THewCZwRVEX2-uBS-8OrqIgM6gAHGiLmWLnHuVz8Ejxo9Yy_S7qwxWiYU11go-Kua4h8FQ',
    redirect_uri: 'http://localhost:3000/'
    //refresh_token: 'AQC0c6cQZ5WfZ76DM_iyPOATkEyZmGQVL5LEW1MRlQHcRrizp24ffb8pHBmRnOWytGqyjs-aTeUMJD_3vdPydERbPDeyqFk_97KQOGqaqUSeybwDEosXQzLcSkt1w0jyPE0'
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
  const client_secret = "4ea9f358a9d945c1a88bc431a88e9e5a";
  const client_id = "244344d193a6458884254bd22be214b5";
  // const auth = process.env.NEXT_PUBLIC_AUTHORIZATION;
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  // const token_link = "https://accounts.spotify.com/api/token";

  const formBody = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: 'AQCvri_bCyolCnvvtIqoNxrU970dAuKM000Gt5v5cMsR1P2GDox4NEv0QYUxf4i9ayeIhEctrKcj6Yt4Mrnpx96xwOAQp2L-HxHlJ_AjEqplhOLGmEBka8xTjskeUZoZb2k'
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