export default function blogPost() {
    return (
        <div></div>
    )
}
//tell next.js how many pages there are
export async function getStaticPaths() {
    const response = await fetch("http://localhost:1337/api/posts");
    const posts = await response.json();
    // Get the paths we want to pre-render based on posts
    const paths = posts.data.map((post) => ({
        params: { id: post.attributes.Slug },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}
//get page data