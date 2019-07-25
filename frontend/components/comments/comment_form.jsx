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
        this.props.createComment(this.state).then(this.setState({ body: ""}));
    }

    render() {
        return (
            <form className="comment-form" action="" onSubmit={this.handleSubmit}>
                <textarea className="comment-form-textarea"
                    type="text"
                    value={this.state.body}
                    onChange={this.handleInput("body")}
                    placeholder="Say your thing"
                />

                <input className="comment-form-submit" type="submit" value="Reply"/>
            </form>
        )
    }
    
}



export default CommentForm;