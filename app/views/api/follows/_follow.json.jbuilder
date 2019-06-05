# a new followings or followers, gives us the user's information
    # follow.username --> username


json.followings do
    json.array! followings do |follow|
        json.id follow.id
        json.username follow.username
    end
end


json.followers do
    json.array! followers do |follow|
        json.id follow.id
        json.username follow.username
    end
end