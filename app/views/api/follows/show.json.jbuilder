# not sure... same as index for now

# json.follows do
#     json.partial! "api/follows/follow" followings: @followings
#     json.partial! "api/follows/follow" followers: @followers
# end

# json.partial! 'follow', follow: @follow

json.extract! @follow, :id, :following_id, :follower_id