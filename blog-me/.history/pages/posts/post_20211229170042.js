import Head from 'next/head'
import Image from 'next/image'
import { fetchAPI } from "/lib/api";
const posts = fetchAPI("/api/posts");
export default function Post() {
  return (
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