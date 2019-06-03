import React from 'react';
import { withRouter } from 'react-router-dom';

class PhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: this.props.post,
            photoFile: null,
            photoUrl: null
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleFile(e) {
        // ability to preview a file before upload
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result })
        };
        if (file) {
            fileReader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: "", photoFile: null });
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[content]', this.state.content);
        formData.append('post[post_type]', "photo");
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        $.ajax({
            url: 'api/posts',
            method: 'post',
            data: formData,
            contentType: false,
            processData: false
        }).then(this.props.closeModal());
        
        // this.props. action-createpost? (this.state).then(this.props.closeModal())
    }

    render() {
        const preview = this.state.photoUrl ? <img className="image-prev" src={this.state.photoUrl} /> : null;
        return (
            <div className="form_container">
                <form className="photo-form" onSubmit={this.handleSubmit}>
                    
                    <input 
                        type="file"
                        onChange={this.handleFile} 
                    />
                    {preview}

                    <textarea className="content-text"
                        type="text"
                        value={this.state.content}
                        onChange={this.handleInput("content")}
                        placeholder="Your text here"
                    />

                    <div>
                        <button onClick={this.props.closeModal} className="close-modal">Close</button>
                        <input className="submit-post" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(PhotoForm);
