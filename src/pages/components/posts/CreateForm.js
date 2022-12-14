import {Field, Form, Formik} from "formik";
import {useAddPostMutation} from "../../../app/postApi";
import {sweetalertAddPost} from "../../../helpers/sweetalertService";
import {useEffect} from "react";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {postFormValidation} from "../../../helpers/postFormValidation";
import {createFormInitialValues} from "../../../helpers/initialValues";


const CreateFormPost = () => {
    const navigate = useNavigate()
    const [addPost, {isLoading, isSuccess}] = useAddPostMutation()
    useEffect(() => {
        if (isSuccess) {
            sweetalertAddPost()
            navigate("/posts")
        }
    }, [isLoading]);

    return (
        <Formik
            initialValues = {createFormInitialValues}
            onSubmit = { ({title, body}) => {
                addPost({title, body})
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
                    <button className="btn btn-dark" type="submit">Create</button>
                </Form>
            )}

        </Formik>
    )
}

export default CreateFormPost;