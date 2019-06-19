json.extract! post, :title, :content, :post_type, :id, :author_id

if post.photo.attached?
    json.photoUrl url_for(post.photo)
end

json.author do
    json.partial! "api/users/user", user: post.author
end

json.set! :likers do
    json.array! post.likes.pluck(:user_id)
    # json.partial! "api/likes/like", like: post.likes
end


# json.photoUrls post.photo.map { |file| url_for(file) }

