import styles from '../styles/body.module.css'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
// import imageRenderer from '../utils/parser.tsx'
import imageRenderer from '../components/parser'
import Image from 'next/image'

// import { MDXRemote } from 'next-mdx-remote'

export default function blogPost({post}) {
    return (
    <div className={styles.wrapper} style={{ flexWrap: "wrap" }}>
        <div className={styles.myPostTitle}>{post.data[0].attributes.Title}</div>
        <div className={styles.myPostContent}>By: {post.data[0].attributes.Author}</div>
        {/* <ReactMarkdown># Hello, *world*!</ReactMarkdown> */}
        <ReactMarkdown className={styles.myPostContent} components={{ img: imageRenderer }}>{post.data[0].attributes.Content}</ReactMarkdown>
        {/* <ReactMarkdown source={post.data[0].attributes.Content} className={styles.myPostDesc} renderers={{ image: imageRenderer }}/> */}
        {/* <Image width={600} height={350} className="h-48 w-full object-cover" src={urlBuilder(post.image[0].url)} alt={post.title} /> */}
        {/* <MDXRemote {...post.data[0].attributes.Content} components={components} /> */}
    </div>
    )
}

// const BlogImage = (props) => {
//     return <Image {...props} style={{ maxWidth: "51%" }} />
//   }

//tell next.js how many pages there are
export async function getStaticPaths() {
    const response = await fetch("https://fast-shore-63405.herokuapp.com/api/posts");
    const posts = await response.json();
    // Get the paths we want to pre-render based on posts
    const paths = posts.data.map((post) => ({
        params: { slug: post.attributes.Slug },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}
//get page data
export async function getStaticProps({params}) {
    const {slug} = params;
    console.log({slug});
    console.log('https://fast-shore-63405.herokuapp.com/api/posts?filters[Slug][$eq]='+{slug}.slug);
    // ?filters[username][$eq]=John
    // const res = await fetch('http://localhost:1337/api/posts?Slug=${slug}');
    //https://fast-shore-63405.herokuapp.com
    const res = await fetch('https://fast-shore-63405.herokuapp.com/api/posts?filters[Slug][$eq]='+{slug}.slug);
    // console.log("deliminaeter" + res);
    const data = await res.json();
    // console.log("deliminaeter" + data[0]);
    const post = data;

    return {
        props: {post},
    };
}