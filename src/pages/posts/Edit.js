
import CreateFormPost from "../components/posts/CreateForm";
import {useParams} from "react-router-dom";
import {usePostQuery} from "../../app/postApi";
import EditFormPost from "../components/posts/EditForm";


const EditPost = () => {

    const {postId} = useParams()
    const {data: post, isLoading, isError, error, isSuccess} = usePostQuery(postId)

    return (
        <div className="col-md-6">
            <h2>Edit Post :</h2>
            <EditFormPost post={post}/>
        </div>
    )
}

export default EditPost;