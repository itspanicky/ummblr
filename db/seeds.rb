# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
User.delete_all
Post.delete_all
Follow.delete_all
Like.delete_all

# to get user avatars:
# file = open('file_url/file.jpg')
# demo.avatar.attach(io: file, filename: 'file.jpg')


user1 = User.create(username: 'itspanicky', email: 'itspanicky@gmail.com', password: "password")
user2 = User.create(username: 'fish123', email: 'fish@gmail.com', password: 'password')
user3 = User.create(username: 'Gangstaboi92', email: 'momsspaghetti@gmail.com', password: 'password')
user4 = User.create(username: 'ImABot', email: 'bot@gmail.com', password: 'password')
user5 = User.create(username: 'uglyboy33', email: 'uglyboy@gmail.com', password: 'password')
demo = User.create(username: 'DemoUser', email: 'demo@gmail.com', password: 'password')


itspanicky_avatar = open('https://ummblr-dev.s3.amazonaws.com/fullsizeoutput_1.jpeg')
user1.avatar.attach(io: itspanicky_avatar, filename: 'https://ummblr-dev.s3.amazonaws.com/fullsizeoutput_1.jpeg')

default_avatar = open('https://ummblr-dev.s3.amazonaws.com/Knight+-+White+Inverted.jpg')
demo.avatar.attach(io: default_avatar, filename: 'https://ummblr-dev.s3.amazonaws.com/Knight+-+White+Inverted.jpg')

# demo.followings 
Follow.create(following_id: demo.id, follower_id: user5.id) # user5 follows demo
Follow.create(following_id: user1.id, follower_id: user3.id) # user3 follows user1
Follow.create(following_id: user1.id, follower_id: user4.id) # user4 follows user1
Follow.create(following_id: user1.id, follower_id: demo.id)
Follow.create(following_id: user2.id, follower_id: user1.id) # user1 follows user2
Follow.create(following_id: user2.id, follower_id: user3.id) # user3 follows user2


text1 = Post.create(title: 'Hello World', content: "This is my first post", post_type: "text", author_id: demo.id)

quote1 = Post.create(title: "People are so scared to lose that they don't even try", content: "Kanye West", post_type: "quote", author_id: user3.id)
quote2 = Post.create(title: "I feel like I'm too busy writing history to read it", content: "Kanye West", post_type: "quote", author_id: user3.id)

photo2 = open('https://ummblr-dev.s3.amazonaws.com/Girl.jpg')
image2 = Post.create(title: 'Photo', content: 'Another window', post_type: "photo", author_id: user2.id)
image2.photo.attach(io: photo2, filename: 'https://ummblr-dev.s3.amazonaws.com/Girl.jpg')

text2 = Post.create(title: 'I love fish', content: "especially when grilled", post_type: "text", author_id: user1.id)

photo1 = open('https://ummblr-dev.s3.amazonaws.com/Window.jpeg')
image1 = Post.create(title: 'Photo', content: 'This is a window', post_type: "photo", author_id: user2.id)
image1.photo.attach(io: photo1, filename: 'https://ummblr-dev.s3.amazonaws.com/Window.jpeg')


like1 = Like.create(user: user1, post: text1)
like2 = Like.create(user: user2, post: text1)
like3 = Like.create(user: user1, post: image1)
like4 = Like.create(user: demo, post: image2)
like5 = Like.create(user: demo, post: quote2)
like6 = Like.create(user: user1, post: text2)
like7 = Like.create(user: user5, post: text1)
like8 = Like.create(user: user5, post: image1)
like9 = Like.create(user: demo, post: image2)
like10 = Like.create(user: demo, post: quote2)
like11 = Like.create(user: user1, post: quote1)



