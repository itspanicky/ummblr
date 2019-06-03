json.post do
    json.partial! "api/posts/post", post: @post
    if post.photo.attached?
        json.photoUrl url_for(post.photo)
    end
end

json.author do
    json.partial! "api/users/user", user: @post.author
end


# json.photoUrls @post.photos.map { |file| url_for(file) }