
@posts.each do |post|
    json.set! post.id do
        json.partial! "api/posts/post", post: post
        if post.photo.attached?
            json.photoUrl url_for(post.photo)
        end
    end
end