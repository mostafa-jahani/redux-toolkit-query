import {Field, Form, Formik} from "formik";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useUpdatePostMutation} from "../../../app/postApi";
import {sweetalertUpdatePost} from "../../../helpers/sweetalertService";
import {postFormValidation} from "../../../helpers/postFormValidation";
import {updatePostInitialValues} from "../../../helpers/initialValues";


const EditFormPost = ({post}) => {
    const navigate = useNavigate()
    const [updatePost, {isLoading, isSuccess}] = useUpdatePostMutation()
    useEffect(() => {
        if (isSuccess) {
            sweetalertUpdatePost()
            navigate('/posts')
        }
    }, [isLoading]);

    return (
        <Formik
            initialValues = {updatePostInitialValues(post)}
            onSubmit = { ({title, body}) => {
                updatePost(post.id, {title, body})
            }}
            validationSchema={postFormValidation}
        >

            { ({ errors, touched }) => (
                <Form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <Field name="title" className="form-control"/>
                        {errors.title && touched.title ? (<div className="text-danger">{errors.title}</div>) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="body" className="form-label">Body</label>
                        <Field name="body" as="textarea" rows="4" className="form-control"/>
                        {errors.body && touched.body ? (<div className="text-danger">{errors.body}</div>) : null}
                    </div>
                    <button className="btn btn-dark" type="submit">Edit</button>
                </Form>
            )}

        </Formik>
    )
}

export default EditFormPost;