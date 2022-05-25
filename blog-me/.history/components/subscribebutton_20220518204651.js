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