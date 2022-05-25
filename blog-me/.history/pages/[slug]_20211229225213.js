export default function blogPost() {
    return (
        <div>{post.Title}</div>
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
    const res = await fetch('http://localhost:1337/api/posts?Slug=${slug}');
    const data = await res.json();
    const post = data[0];

    return {
        props: {post},
    };
}