import {Route, Routes} from "react-router-dom";
import IndexPost from "./Index";
import ShowPost from "./Show";
import CreatePost from "./Create";


const RouterPost = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPost />} />
            <Route path="/:postId" element={<ShowPost />} />
            <Route path="/create" element={<CreatePost />} />
        </Routes>
    )
}


export default RouterPost;