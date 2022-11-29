
export const createFormInitialValues = {
    title: '',
    body: ''
}

export const updatePostInitialValues = (post)  => ({
    title: post.title,
    body: post.body
})