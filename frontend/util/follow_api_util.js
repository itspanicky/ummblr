// { followings: {id, username}, followers: {id, username}}
export const fetchFollows = (userId) => {
    debugger
    return $.ajax({
        method: "get",
        url: `/api/users/${userId}/follows`,
    })
}


export const follow = (followingId) => {
    debugger
    return $.ajax({
        method: "post",
        url: "/api/follows",
        // url: `/api/users/${userId}/follows`,
        data: { followingId }
    })
}


export const unfollow = (userId) => {
    debugger
    return $.ajax({
        method: "delete",
        url: `/api/follows/${userId}`
    })
}