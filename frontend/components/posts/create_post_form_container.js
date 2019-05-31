import { connect } from 'react-redux';
import { createPost } from '../../actions/entities/post_actions';
import PostForm from './post_form';

const msp = (state) => {
    return ({
        post: {title: "", content: "", type: ""}
        // how to add in type and author_id? -- maybe in state
    })
}

const mdp = (dispatch) => {
    return ({
        createPost: (post) => dispatch(createPost(post))
    })
}

export default connect(msp, mdp)(PostForm)