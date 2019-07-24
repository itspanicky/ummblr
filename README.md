# [ummblr](http://ummblr.herokuapp.com "ummblr")

[Live Site](http://ummblr.herokuapp.com "ummblr")

##### ummblr is a full-stack web application built using ruby on rails and postgreSQL database back-end with a react/redux front-end. ummblr incorporates Amazon S3 technologies to allow cloud-based hosting of image files for better scalbility and performance.

![alt text](https://ummblr-dev.s3.amazonaws.com/ummblr.png "splash page")

#### ummblr, a Tumblr clone, is a social media application that allows user to post and share media contents such as text, images, gifs, quotes, and links. Users can follow other users and see content from other users on their dashboard.

## Features 

#### User authenetication
- Users are able to signup and login.
- Credential checking blocks users from accessing certain features
```javascript
    const Auth = ({ component: Component, path, loggedIn, exact }) => (
        <Route path={path} exact={exact} render={(props) => (
            loggedIn ? <Redirect to="/dashboard" /> : <Component {...props} /> )}
        />
    );

    const Protected = ({ component: Component, path, loggedIn, exact }) => (
        <Route path={path} exact={exact} render={(props) => (
            loggedIn ? <Component {...props} /> : <Redirect to="/" /> )}
        />
    );

    const msp = state => {
        return ({
            loggedIn: Boolean(state.session.id)
        });
    };

    export const AuthRoute = withRouter(connect(msp, null)(Auth));
    export const ProtectedRoute = withRouter(connect(msp, null)(Protected));
```
- By using react-router-dom, users are redirected to the sign in page if they are not properly logged in. Users are also redirected back to their dashboard if they try to go to the sign in page when they are already logged in.

#### Dashboard
![alt text](https://ummblr-dev.s3.amazonaws.com/ummblr-dash.png "dashboard")
- Users have personalize Dashboards that consist of only content they create, reblog, or other content from other users that they follow
- A list of recommended blogs and trending posts give users access to discover more content.
```javascript
render() {
    return (
            <div className="dashboard-container">
                <NavbarContainer />
                <div className="dashboard">

                    <section className="dashboard-main">
                        <div className="post-nav-container">
                            {avatar}
                            <PostNavContainer />
                        </div>
                        <div className="post-index-container">
                            <PostIndexContainer />
                        </div>
                    </section>

                    <section className="dashboard-side">
                        <ul className="recommended-blogs"> <p>Recommended Blogs</p>
                            {recommended}
                        </ul>

                        <ul className="recommended-blogs"> <p>Radar</p>
                            {radarPost}
                        </ul>
                        <AboutMe />
                    </section>

                </div>
            </div>
        )
    }
}
```
- The dashboard consists of modular components such as the navigation bar and recommended blogs, which can be reused in other aspects throughout the application.

#### Posting content 
![alt text](https://ummblr-dev.s3.amazonaws.com/2019-06-07+at+10.37+AM.png "text post")
- When posting, the post will render seamlessly on the dashboard. Users are then able to edit or delete their own posts.
- Image files can be dragged and dropped in, which will then render a image preview before submitting. Upon submission, the image file will be uploaded to AWS.
```javascript
    const Modal = ({modal, closeModal}) => {
        if (!modal) {
            return null;
        }

        let component;
        switch (modal.modal) {
            case 'Create Text Form':
                component = <CreatePostContainer postType="text" />;
                break;
            case 'Edit Text Form':
                component = <EditPostContainer postId={modal.postId} />;
                break;
            case 'Create Photo Form':
                component = <CreatePhotoPostContainer />
                break;
            case 'Edit Photo Form':
                component = <EditPhotoPostContainer postId={modal.postId} />
                break;
            case 'Create Quote Form':
                component = <CreateQuoteContainer postType="quote" />;
                break;
            case 'Edit Quote Form':
                component = <EditQuoteContainer postId={modal.postId}/>;
                break;
            case 'Create Link Form':
                component = <CreateLinkContainer />
                break;
            case 'Edit Link Form':
                component = <EditLinkContainer postId={modal.postId}/>;
                break;
            case 'alt-create-post':
                component = <CreatePostModalContainer />
                return (
                    <div className="modal-background" onClick={() => closeModal()}>
                        <div className="modal-child" onClick={e => e.stopPropagation()}>
                            {component}
                        </div>
                    </div>
                )
                break;
            case 'Create Reblog':
                component = <CreateReblogContainer postId={modal.postId} />
                break;
            case 'user show':
                
                break;
            default:
                return null;
        }
        return (
            <div className="modal-background">
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    { component }
                </div>
                <div></div>
            </div>
        )
    }
```
- Modals are incorporated to create a variety of post forms such as quotes, photos, and their edit counterparts.

#### Explore Feed
![Alt Text](https://ummblr-dev.s3.amazonaws.com/ummblr-explore2.png "explore")
- Users can explore other users' content on this page.
- Users can like, reblog, and comment on other posts.
```javascript
    let col1 = [];
    let col2 = [];
    let col3 = [];
    let col4 = [];
    for (let i = 0; i < allPosts.length; i++) {
        let temp = i % 4;
        if (temp === 0) {
            col1.push(allPosts[i]);
        } else if (temp === 1) {
            col2.push(allPosts[i]);
        } else if (temp === 2) {
            col3.push(allPosts[i]);
        } else {
            col4.push(allPosts[i]);
        }
    }
```
- The explore page consist of splitting up all other user's content into columns to create a dynamic grid layout.

## Future Implementations
- Personalized user show pages