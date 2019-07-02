import React from 'react';
import { withRouter } from 'react-router-dom';

class PostForm extends React.Component {
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
        
        let title = this.props.formType === "Reblog" ?
            <p className="title-text">{this.state.title}</p> :
            <input className="title-text"
                type="text"
                value={this.state.title}
                onChange={this.handleInput("title")}
                placeholder="Title"
            />

        let content = this.props.formType === "Reblog" ?
            <div className="content-text"><p></p>{this.props.post.content}</div> :
            <textarea className="content-text"
                type="text"
                value={this.state.content}
                onChange={this.handleInput("content")}
                placeholder="Your text here"
            />

        let reblogDescription = this.props.formType === "Reblog" || this.props.post.reblog_post_id ?
            <textarea className="content-text"
                type="text"
                value={this.state.reblog_description}
                onChange={this.handleInput("reblog_description")}
                placeholder="Your text here"
            /> :
            <span></span>

        return (

            <div className="form_container">
                <div className="author_name">{this.props.currentUser.username}</div>
                <form className="text-form" onSubmit={this.handleSubmit}>
                    {title}

                    {content}

                    {reblogDescription}
                    
                    <div className="post-form-footer">
                        <button onClick={this.props.closeModal} className="close-modal">Close</button>
                        <input className="submit-post" type="submit" value={this.props.formType}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(PostForm);