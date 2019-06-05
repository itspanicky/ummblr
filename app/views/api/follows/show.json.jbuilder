# not sure... same as index for now

json.follows do
    json.partial! "api/follows/follow" followings: @followings
    json.partial! "api/follows/follow" followers: @followers
end