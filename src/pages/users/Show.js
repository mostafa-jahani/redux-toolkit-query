import {useParams} from "react-router-dom"
import {useUserQuery} from "../../app/userApi";


const ShowUser = () => {
    const {userId} = useParams();
    const {data: user, isLoading, isError, error, isSuccess} = useUserQuery(userId)

    return (
        <>
            {isError && <div>{error}</div>}
            {isLoading && <div className="spinner-border"></div>}
            {isSuccess && <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        {user.name}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">username : {user.username}</li>
                        <li className="list-group-item">email : {user.email}</li>
                        <li className="list-group-item">phone : {user.phone}</li>
                        <li className="list-group-item">website : {user.website}</li>
                    </ul>
                </div>
            </div>}
        </>
    )
}

export default ShowUser