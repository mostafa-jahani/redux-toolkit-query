import {useUsersQuery} from "../app/userApi";
import ListUsers from "./components/users/List";


const IndexUser = () => {

    const {data: users, isLoading, isError, error, isSuccess } = useUsersQuery()

    return (
        <div className="container mt-5">
            <div className="row g-3">
                <h2>Users :</h2>
                {isError && <div>{error}</div>}
                {isLoading && <div className="spinner-border"></div>}
                {isSuccess && <ListUsers users={users}/>}
            </div>
        </div>
    )
}


export default IndexUser;