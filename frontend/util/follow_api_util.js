export const fetchFollows = (userId) => {
    return $.ajax({
        method: "get",
        url: `/api/users/${userId}/follows`,
    })
}

export const follow = (user) => {
    return $.ajax({
        method: "post",
        url: "/api/follows",
        data: { user }
    })
}


export const unfollow = (userId) => {
    return $.ajax({
        method: "delete",
        url: `/api/follows/${userId}`
    })
}
