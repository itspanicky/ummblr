import { connect } from 'react-redux';
import ExploreIndexItem from './explore_index_item';
import { follow, unfollow } from '../../actions/entities/follow_actions';
import { fetchComments, createComment } from '../../actions/entities/comment_actions';
import { likePost, unlikePost } from '../../actions/entities/like_actions';

const msp = (state, ownProps) => {
    const post = ownProps.post
    const posts = state.entities.posts
    const currentUser = state.entities.users[state.session.id];
    const authorId = ownProps.post.author.id;
    const originalPost = posts[post.reblog_post_id];
    const postsArray = Object.values(posts);
    const reblogs = postsArray.filter(post => post.reblog_post_id === ownProps.post.id)
    const comments = Object.values(post.comments);
    
    return ({
        posts: posts,
        postsArray,
        currentUser,
        originalPost,
        authorId,
        reblogs,
        comments,
        users: state.entities.users
    })
}

const mdp = dispatch => {
    return ({
        follow: (user) => dispatch(follow(user)),
        unfollow: (user) => dispatch(unfollow(user)),
        likePost: (postId, userId) => dispatch(likePost(postId, userId)),
        unlikePost: (postId) => dispatch(unlikePost(postId)),
        fetchComments: (postId) => dispatch(fetchComments(postId)),
        createComment: (comment) => dispatch(createComment(comment))
    })
}

export default connect(msp, mdp)(ExploreIndexItem);