# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Post.delete_all

demo = User.create(username: 'demo_user', email: 'demo@gmail.com', password: 'password') 
user1 = User.create(username: 'itspanicky', email: 'itspanicky@gmail.com', password: "password")
user2 = User.create(username: 'im_a_fish', email: 'fish@gmai.com', password: 'password')

text1 = Post.create(title: 'Hello World', content: "This is my first post", post_type: "text", author_id: demo.id)
text2 = Post.create(title: 'I love fish', content: "especially when grilled", post_type: "text", author_id: user1.id)