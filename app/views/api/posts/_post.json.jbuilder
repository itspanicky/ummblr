json.extract! post, :title, :content, :post_type, :id, :author_id

# json.mediaUrls post.media.map { |file| url_for(file) }