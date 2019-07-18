# [ummblr](http://ummblr.herokuapp.com "ummblr")

[Live Site](http://ummblr.herokuapp.com "ummblr")

##### ummblr is a full-stack web application built using ruby on rails and postgreSQL database back-end with a react/redux front-end. ummblr incorporates Amazon S3 technologies to allow cloud-based hosting of image files for better scalbility and performance.

![alt text](https://ummblr-dev.s3.amazonaws.com/ummblr.png "splash page")

#### ummblr, a Tumblr clone, is a social media application that allows user to post and share media contents such as text, images, gifs, quotes, and links. Users can follow other users and see content from other users on their dashboard.

## Features 

#### User authenetication
- Users are able to signup and login.
- Credential checking blocks users from accessing certain features

#### Dashboard
![alt text](https://ummblr-dev.s3.amazonaws.com/ummblr-dash.png "dashboard")
- Users have personalize Dashboards that consist of only content they create, reblog, or other content from other users that they follow
- A list of recommended blogs and trending posts give users access to discover more content.

#### Posting content 
![alt text](https://ummblr-dev.s3.amazonaws.com/2019-06-07+at+10.37+AM.png "text post")
- When posting, the post will render seamlessly on the dashboard. Users are then able to edit or delete their own posts.
- Image files can be dragged and dropped in, which will then render a image preview before submitting. Upon submission, the image file will be uploaded to AWS.

#### Explore Feed
![Alt Text](https://ummblr-dev.s3.amazonaws.com/ummblr-explore.gif "explore")
- Users can explore other users' content on this page.
- Users can like, reblog, and comment on other posts.

## Future Implementations
- Personalized user show pages