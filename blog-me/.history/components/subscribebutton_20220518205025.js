import {subscribe} from '../lib/subscribe'

export default function subscribebutton() {
    return (
        <form action="/api/form" method="post">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </form>
    )
  }

export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.first || !body.last) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Error no email found' })
    }
  
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.first} ${body.last}` })
  }