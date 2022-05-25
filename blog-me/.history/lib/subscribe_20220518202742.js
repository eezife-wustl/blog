import axios from 'axios'

export async function subscribe(email) {
  const API_KEY = process.env.MAILCHIMP_API_KEY
  const API_SERVER = process.env.MAILCHIMP_API_SERVER
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID

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

// export default async (req, res) => {
//   const { email } = req.body

//   if (!email || !email.length) {
//     return res.status(400).json({ error: 'Email is required' })
//   }

//   const API_KEY = process.env.MAILCHIMP_API_KEY
//   const API_SERVER = process.env.MAILCHIMP_API_SERVER
//   const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
  
//   const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

//   const data = {
//     email_address: email,
//     status: 'subscribed'
//   }

//   const options = {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `api_key ${API_KEY}`
//     }
//   }

//   try {
//     const response = await axios.post(url, data, options)
//     if (response.status >= 400) {
//       return res.status(400).json({
//         error: `There was an error subscribing to the newsletter.`
//       })
//     }
//     return res.status(201).json({ message: 'success' })
//   } catch (error) {
//     console.log(error)
//     return res.status(500).json({ error: error.message })
//   }
// }