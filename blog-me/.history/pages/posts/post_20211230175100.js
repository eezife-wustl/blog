import Head from 'next/head'
import Image from 'next/image'
import { fetchAPI } from "/lib/api";
import Link from "next/link";

export default function Post({posts}) {
  return (
    <div>
        <span>
            A POST
        </span>
            {posts.data 
             && posts.data.map((post) => (
                <div key={post.id}>
                    <h2>{post.attributes.Title}</h2>
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