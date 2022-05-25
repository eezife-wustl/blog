import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/body.module.css'
import Layout from '../components/layout'
import Link from 'next/link'


// export default function Home() {
//   return (
//     <Link href="/posts/post">
//       <a>BLOG POST</a>
//     </Link>
//   )
// }
export default function Home({posts}) {
  return (
    <div style={{ fontFamily: "Jost-400-Book"}}>
            {posts.data 
             && posts.data.map((post) => (
               <div  key={post.id}>
                  <Link href={`/${post.attributes.Slug}`}>
                      <a> <h1  className={styles.myPosts}> {post.attributes.Title} </h1> </a>
                  </Link>
                  <h1 style={{ fontFamily: "Jost-400-Book"}}> {post.attributes.Date} </h1>
                  <hr style={{height:'2px', backgroundColor:'gray', borderWidth:'0'}} />
                </div>
            ))}
    </div>
  )
}

export async function getStaticProps() {
        const response = await fetch("http://localhost:1337/api/posts");
        const posts = await response.json();
        console.log(posts);
        return {
            props: {posts},
        };
  }