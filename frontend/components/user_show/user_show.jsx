import React from 'react';
import Avatar from '../avatar/avatar';
import Modal from '../modal/modal';

class userShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default userShow;