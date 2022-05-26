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
    <div style={{ marginTop: "4rem"}}>
            {posts.data
             && posts.data.map((post) => (
               <div  key={post.id}>
                  <Link href={`/${post.attributes.Slug}`}>
                      <a> <h1  className={styles.myPosts} style={{ margin: "0"}}> {post.attributes.Title} </h1> </a>
                  </Link>
                  <h1 style={{ fontFamily: "Jost-400-Book", margin: "0"}}> {post.attributes.Author} </h1>
                  <h2 style={{ fontFamily: "Jost-400-Book", margin: "0"}}> {post.attributes.Date} </h2>
                  <hr style={{height:'2px', backgroundColor:'gray', borderWidth:'0'}} />
                </div>
            ))}
    </div>
  )
}

export async function getStaticProps() {
        const response = await fetch("https://fast-shore-63405.herokuapp.com/api/posts");
        const posts = await response.json();
        //console.log(posts);
        //posts.data.reverse();
        return {
            props: {posts},
        };
  }