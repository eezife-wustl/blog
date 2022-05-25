import Head from 'next/head'
import Image from 'next/image'
import { fetchAPI } from "/lib/api";

export default function Post({posts}) {
  return (
    <div>
        <span>
            A POST
        </span>
        {posts &&
        posts.map((post) => (
          <Link href={`/${post.Slug}`} key={post.id}>
            <a>
              <h2>{post.Title}</h2>
              <div>{post.User.username}</div>
            </a>
          </Link>
        ))}
        <span>
            {/* {fetchAPI("http://localhost:1337")} */}
            test
        </span>
    </div>
  )
}

export async function getStaticProps() {
        const response = await fetch("http://localhost:1337/api/posts");
        const posts = await response.json();
        return {
            props: {posts},
        };
  }