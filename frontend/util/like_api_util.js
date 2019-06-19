export const likePost = (postId, userId) => {
    debugger
    return $.ajax({
        method: "post",
        url: "/api/likes",
        data: { postId, userId}
    })
}

export const unlikePost = (postId) => {
    debugger
    return $.ajax({
        method: "delete",
        // url: `/api/likes/${id}`
        url: `api/posts/${postId}/like`
    })
}