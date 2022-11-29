import * as yup from "yup";

export const postFormValidation = yup.object().shape({
    title: yup.string().required(),
    body: yup.string().required(),
})