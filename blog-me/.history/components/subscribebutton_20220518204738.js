import {subscribe} from '../lib/subscribe'

export default function subscribebutton() {
    return (
      <>
        <nav className={styles.myNavbar}>
          <Link href="/">
            <a className={styles.text}>ERIKA'S BLOG</a>
          </Link>
          <div>
          <Link href="/about">
            <a className={styles.text} style={{ marginRight: "2rem"}}>ABOUT</a>
          </Link>
          <Link href="/spotify_dashboard">
            <a>
              <Image className={styles.spotify}
                src={spotify}
                alt="[Spotify Logo]"
                width={20}
                height={20}
              />
            </a>
          </Link>
          </div>
        </nav>
    </>
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
      return res.status(400).json({ data: 'First or last name not found' })
    }
  
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.first} ${body.last}` })
  }