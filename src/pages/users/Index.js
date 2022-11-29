import {useUsersQuery} from "../../app/userApi";
import ListUsers from "../components/users/List";


const IndexUser = () => {

    const {data: users, isLoading, isError, error, isSuccess} = useUsersQuery()

    return (
        <>
            <h2>Users :</h2>
            {isError && <div>{error}</div>}
            {isLoading && <div className="spinner-border"></div>}
            {isSuccess && <ListUsers users={users}/>}
        </>
    )
}


export default IndexUser;