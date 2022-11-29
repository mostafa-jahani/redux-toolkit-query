import {Link, useParams} from "react-router-dom"
import {useDeleteMutation, useDeletePostMutation, usePostQuery} from "../../app/postApi";
import {sweetalertDeletePost} from "../../helpers/sweetalertService";


const ShowPost = () => {
    const {postId} = useParams();
    const {data: post, isLoading, isError, error, isSuccess} = usePostQuery(postId)
    const [deletePost] = useDeletePostMutation()
    const handleDeletePost = async () => {
        await deletePost(postId)
        sweetalertDeletePost(postId)
    }


    return (
        <>
            {isError && <div>{error}</div>}
            {isLoading && <div className="spinner-border"></div>}
            {isSuccess && <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        {post.title}
                    </div>
                    <ul className="card-body">
                        {post.body}
                    </ul>
                    <div className="card-footer">
                        <Link className="btn btn-sm btn-secondary" to={`/posts/edit/${postId}`}>Edit</Link>
                        <button className="btn btn-sm btn-dark" style={{marginLeft: '4px'}} onClick={handleDeletePost}>Delete</button>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default ShowPost