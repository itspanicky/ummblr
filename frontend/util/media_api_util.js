export const createMediaPost = (formData) => {
    return $.ajax({
        method: "post",
        url: "/api/posts",
        data: formData,
        contentType: false,
        processData: false,
    })
}