import {subscribe} from '../pages/api/subscribe'
import styles from '../styles/about.module.css'

export default function About() {
    return (
        <>
            <div className={styles.about} style={{ fontSize: "1rem", marginTop: "1rem"}}> Hey, I'm Erika! This is my little blog for rambling and things. </div>
        </>
    )
  }