
json.extract! user, :id, :username, :email

if user.avatar.attached?
    json.photoUrl url_for(user.avatar)
end


json.followings do
    json.array! user.followings do |follow|
        json.id follow.id
        json.username follow.username
    end
end


json.followers do
    json.array! user.followers do |follow|
        json.id follow.id
        json.username follow.username
    end
end