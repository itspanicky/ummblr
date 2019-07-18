import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state);
    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <textarea className=""
                    type="text"
                    value={this.state.body}
                    onChange={this.handleInput("body")}
                    placeholder="Say your thing"
                />

                <input type="submit" value="Reply"/>
            </form>
        )
    }
    
}



export default CommentForm;