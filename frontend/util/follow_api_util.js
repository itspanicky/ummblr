// { followings: {id, username}, followers: {id, username}}
export const fetchFollows = (userId) => {
    return $.ajax({
        method: "get",
        url: `/api/users/${userId}/follows`,
    })
}


export const follow = (followerId) => {
    debugger
    return $.ajax({
        method: "post",
        url: "/api/follows",
        data: { followerId }
    })
}


export const unfollow = (userId) => {
    return $.ajax({
        method: "delete",
        url: `/api/follows/${userId}`
    })
}