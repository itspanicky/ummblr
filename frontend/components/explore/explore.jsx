import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import PostIndexItem from '../posts/post_index_item_container';

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followings: this.props.currentUser.followings
        }
    }

    componentDidMount(){
        this.props.fetchPosts();
    }

    componentDidUpdate(prevProps) {
        debugger
        if (this.props.currentUser && this.props.currentUser.followings != prevProps.currentUser.followings) {
            debugger
            // this.props.fetchPosts();
            this.setState({ followings: this.props.followings });
            debugger
        }
    }

    render() {
        let posts = this.props.posts.map(post => {
            if (post.author_id != this.props.currentUser.id) {
                return (
                    <PostIndexItem
                        key={post.id}
                        post={post}
                        deletePost={this.props.deletePost}
                        currentUser={this.props.currentUser}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                    />
                ) 
            }
        }).reverse();

        return (
            <>
                <NavbarContainer />
                <div className="explore-container">
                    <ul className="explore-posts">
                        {posts}
                    </ul>
                </div>
            </>
            
        )
    }
}

export default Explore;