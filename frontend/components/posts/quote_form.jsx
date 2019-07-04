import React from 'react';
import { withRouter } from 'react-router-dom';

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state).then(this.props.closeModal());
    }

    render() {
        let inputContent;
        if (this.props.post.reblog_post_id) {
            
            inputContent = (
                <>
                    <p className="quote-text">{this.props.post.title}</p>
                    <p className="content-text">{this.props.post.content}</p>

                    <textarea className="content-text"
                        type="text"
                        value={this.state.reblog_description}
                        onChange={this.handleInput("reblog_description")}
                        placeholder="Add a caption, if you like"
                    />
                </>
            )
        } else {
            inputContent = (
                <>
                    <textarea className="quote-text"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleInput("title")}
                        placeholder="&ldquo;Quote&rdquo;"
                    />

                    <textarea className="content-text"
                        type="text"
                        value={this.state.content}
                        onChange={this.handleInput("content")}
                        placeholder="Source"
                    />
                </>
            )
        }

        return (
            <div className="form_container">
                <div className="author_name">{this.props.currentUser.username}</div>
                <form className="text-form" onSubmit={this.handleSubmit}>
                    {inputContent}
                    
                    <div className="post-form-footer">
                        <button onClick={this.props.closeModal} className="close-modal">Close</button>
                        <input className="submit-post" type="submit" value={this.props.formType}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(QuoteForm);