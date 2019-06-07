# [ummblr](http://ummblr.herokuapp.com "ummblr")

[Live Site](http://ummblr.herokuapp.com "ummblr")

![alt text](https://ummblr-dev.s3.amazonaws.com/2019-06-07+at+10.13+AM.png "splash page")

#### ummblr, a Tumblr clone, is a social media application that allows user to post and share media contents such as text, images, gifs, quotes, and links. Users can follow other users and see content from other users on their dashboard.


## Technologies

#### ummblr is a full-stack web application built using ruby on rails and postgreSQL database back-end with a react/redux front-end. ummblr incorporates Amazon S3 technologies to allow cloud-based hosting of image files for better scalbility and performance.

## Features 

#### User authenetication
- User are able to signup and login.

#### The primary focus of ummblr is to allow users to post content. 
![alt text](https://ummblr-dev.s3.amazonaws.com/2019-06-07+at+10.37+AM.png "text post")
- When posting, the post will render seamlessly on the dashboard. Users are then able to edit or delete their own posts.
- Image files can be dragged and dropped in, which will then render a image preview before submitting. Upon submission, the image file will be uploaded to AWS.


## Future implementations
- Likes: To be able to like/unlike a post. Users will be able to see all of their likes on their likes page
- Reblogs: To be able to reblog a post. Users will be able to see their reblogs on their dashboard page.
