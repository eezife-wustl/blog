const mailchimp = require("@mailchimp/mailchimp_marketing");

export default async function handler(req, res) {
  // Get data submitted in request's body.

  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER
  });

  const {email} = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('email: ', email)

  const API_KEY = process.env.MAILCHIMP_API_KEY
  const API_SERVER = process.env.MAILCHIMP_API_SERVER
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!email) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'Email not found' })
  }

  res = await mailchimp.lists.addListMember(AUDIENCE_ID, {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: "erika",
      LNAME: subscribingUser.lastName"ez"
  });
  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ message: 'success' })
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