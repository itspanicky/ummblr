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

# to get user avatars:
# file = open('file_url/file.jpg')
# demo.avatar.attach(io: file, filename: 'file.jpg')


user1 = User.create(username: 'itspanicky', email: 'itspanicky@gmail.com', password: "password")
user2 = User.create(username: 'fish123', email: 'fish@gmai.com', password: 'password')
user3 = User.create(username: 'Gangstaboi92', email: 'momsspaghetti@gmai.com', password: 'password')
user4 = User.create(username: 'ImABot', email: 'bot@gmai.com', password: 'password')
user5 = User.create(username: 'uglyboy33', email: 'uglyboy@gmai.com', password: 'password')
demo = User.create(username: 'DemoUser', email: 'demo@gmail.com', password: 'password')

# demo.followings 
Follow.create(following_id: demo.id, follower_id: user5.id) # user5 follows demo
Follow.create(following_id: user1.id, follower_id: user3.id) # user3 follows user1
Follow.create(following_id: user1.id, follower_id: user4.id) # user4 follows user1
Follow.create(following_id: user1.id, follower_id: demo.id)
Follow.create(following_id: user2.id, follower_id: user1.id) # user1 follows user2
Follow.create(following_id: user2.id, follower_id: user3.id) # user3 follows user2

text1 = Post.create(title: 'Hello World', content: "This is my first post", post_type: "text", author_id: demo.id)

quote1 = Post.create(title: "People are so scared to lose that they don't even try", content: "Kanye West", post_type: "quote", author_id: user3.id)

text2 = Post.create(title: 'I love fish', content: "especially when grilled", post_type: "text", author_id: user1.id)

photo1 = open('https://ummblr-dev.s3.amazonaws.com/Window.jpeg')
image1 = Post.create(title: 'Photo', content: 'This is a window', post_type: "photo", author_id: user1.id)
image1.photo.attach(io: photo1, filename: 'https://ummblr-dev.s3.amazonaws.com/Window.jpeg')






