import Head from 'next/head'
import Image from 'next/image'
import { fetchAPI } from "/lib/api";

export default function Post() {
  return (
    <div>
        <span>
            A POST
        </span>
        { posts = fetchAPI("http://localhost:1337") 
            posts && post.map((post) => 
                <div key={Post.id}></div>
            
            )
        }
        <span>
            {/* {fetchAPI("http://localhost:1337")} */}
            test
        </span>
    </div>
  )
}