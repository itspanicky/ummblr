export const createComment = (comment) => {
    return $.ajax({
        method: "post",
        url: "/api/comments",
        data: { comment }
    })
}

export const fetchComments = (post_id) => {
    return $.ajax({
        method: "get",
        url: `/api/posts/${post_id}/comments`
    })
}