import Head from 'next/head'
import Image from 'next/image'
import { fetchAPI } from "/lib/api";

export default function Post() {
  return (
    <div>
        <span>
            A POST
        </span>
        { posts = fetchAPI("http://localhost:1337") }
        <span>
            {/* {fetchAPI("http://localhost:1337")} */}
            test
        </span>
    </div>
  )
}