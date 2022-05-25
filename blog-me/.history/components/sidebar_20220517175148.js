import Link from 'next/link'
import styles from '../styles/sidebar.module.css'
import styled from "styled-components";
import Image from 'next/image'
import spotify from '../public/Spotify_Logo_CMYK_White.png'

export default function Sidebar() {
  return (
    <>
      <nav className={styles.myNavbar}>
        <Link href="/">
          <a className={styles.text} style={{ marginTop: "4rem"}}>ERIKA'S BLOG</a>
        </Link>
        <Link href="/about">
          <a className={styles.text}>ABOUT</a>
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
      </nav>
  </>
  )
}