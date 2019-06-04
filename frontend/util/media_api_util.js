export const createMediaPost = (formData) => {
    return $.ajax({
        method: "post",
        url: "/api/posts",
        data: formData,
        contentType: false,
        processData: false,
    })
}

export const editMediaPost = (post) => {
    return $.ajax({
        method: "post",
        url: `/api/posts/${post.id}`,
        data: { post },
        contentType: false,
        processData: false,
    })
}