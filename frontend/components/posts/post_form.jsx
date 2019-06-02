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
        return (
            <div className="form_container">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={this.state.title} 
                        onChange={this.handleInput("title")} 
                        placeholder="Title" 
                    />

                    <input 
                        type="text"
                        value={this.state.content}
                        onChange={this.handleInput("content")}
                        placeholder="Your text here"
                    />
                    <button onClick={this.props.closeModal} className="close-modal">Close</button>
                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }
}

export default withRouter(PostForm);