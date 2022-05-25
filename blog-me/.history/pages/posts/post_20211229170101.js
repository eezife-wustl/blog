import Head from 'next/head'
import Image from 'next/image'
import { fetchAPI } from "/lib/api";

export default function Post() {
  return (
    const posts = fetchAPI("/api/posts"),
    <div>
        <span>
            A POST
        </span>
            { posts && posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.Title}</h2>
                </div>
            
            ))}
        <span>
            {/* {fetchAPI("http://localhost:1337")} */}
            test
        </span>
    </div>
  )
}