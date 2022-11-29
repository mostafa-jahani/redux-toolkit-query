import {usePostsQuery} from "../../app/postApi";
import ListPosts from "../components/posts/List";
import {Link} from "react-router-dom";


const IndexPost = () => {
    const {data: posts, isLoading, isError, error, isSuccess } = usePostsQuery()

    return (
        <>
            <h2>Posts :</h2>
            <div className="mb-3">
                <Link className="btn btn-dark" to="/posts/create">Create Post</Link>
            </div>
            {isError && <div>{error}</div>}
            {isLoading && <div className="spinner-border"></div>}
            {isSuccess && <ListPosts posts={posts}/>}
        </>
    )
}


export default IndexPost;