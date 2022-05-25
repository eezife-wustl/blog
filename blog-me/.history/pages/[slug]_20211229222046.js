export default function blogPost() {
    return (
        <div></div>
    )
}
//tell next.js how many pages there are
export async function getStaticPaths() {
    const response = await fetch("http://localhost:1337/api/posts");
    const posts = await response.json();
    console.log(posts);
    return {
        props: {posts},
    };
}
//get page data