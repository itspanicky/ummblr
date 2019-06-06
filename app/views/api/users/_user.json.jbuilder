
json.extract! user, :id, :username, :email

if user.avatar.attached?
    json.photoUrl url_for(user.avatar)
end

json.set! :followings do
    json.array! user.followings.pluck(:id)
end

# json.followings do
#     # json.array! user.followings do |follow|
#     #     json.id follow.id
#     #     # json.username follow.username
#     # end
# end

json.set! :followers do
    json.array! user.followers.pluck(:id)
end

# json.followers do
#     json.array! user.followers do |follow|
#         json.id follow.id
#         # json.username follow.username
#     end
# end