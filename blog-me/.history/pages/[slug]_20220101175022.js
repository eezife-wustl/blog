import styles from '../styles/body.module.css'
import ReactDom from 'react-dom'

export default function blogPost({post}) {
    return (
    <div className={styles.wrapper}>
        <div className={styles.myPostTitle}>{post.data[0].attributes.Title}</div>
        ReactDom.render(<ReactMarkdown># Hello, *world*!</ReactMarkdown>, document.body)
        {/* <ReactMarkdown><p className={styles.myPostDesc}>{post.data[0].attributes.Content}</p></ReactMarkdown> */}
    </div>
    )
}
//tell next.js how many pages there are
export async function getStaticPaths() {
    const response = await fetch("http://localhost:1337/api/posts");
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
    console.log('http://localhost:1337/api/posts?filters[Slug][$eq]='+{slug}.slug);
    // ?filters[username][$eq]=John
    // const res = await fetch('http://localhost:1337/api/posts?Slug=${slug}');
    const res = await fetch('http://localhost:1337/api/posts?filters[Slug][$eq]='+{slug}.slug);
    // console.log("deliminaeter" + res);
    const data = await res.json();
    // console.log("deliminaeter" + data[0]);
    const post = data;

    return {
        props: {post},
    };
}