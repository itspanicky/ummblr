export const likePost = (postId) => {
    return $.ajax({
        method: "post",
        url: `/api/posts/${postId}/likes`
    })
}

export const unlikePost = ({postId, likeId}) => {
    return $.ajax({
        method: "delete",
        url: `/api/posts/${postId}/likes/${likeId}`
    })
}