json.extract! post, :title, :content, :post_type, :id, :author_id

if post.photo.attached?
    json.photoUrl url_for(post.photo)
end


# json.photoUrls post.photo.map { |file| url_for(file) }

