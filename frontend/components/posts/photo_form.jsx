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
        if (this.state.photoFile) {
            formData.append('post[post_type]', "photo");
            formData.append('post[id]', this.state.post.id)
            formData.append('post[photo]', this.state.photoFile);
            this.props.action(formData, this.state.post).then(this.props.closeModal());
        } 
        // $.ajax({
        //     url: 'api/posts',
        //     method: 'post',
        //     data: formData,
        //     contentType: false,
        //     processData: false
        // }).then(this.props.closeModal());
    }

    render() {
        // const preview = this.state.photoUrl ? <img className="image-prev" src={this.state.photoUrl} /> : null;

        const imageUpload = this.state.photoUrl ?
            ( <img className="image-prev" src={this.state.photoUrl} /> ) :
            ( <div>
                <input className="upload"
                type="file"
                name="file"
                id="file"
                onChange={this.handleFile}
                />
                <label htmlFor="file">
                    <div className="upload-file">
                        <p><i className="fas fa-camera-retro"></i></p>
                        <p>Upload a photo</p>
                        <p><i className="far fa-laugh-squint"></i></p>
                    </div>

                </label>
            </div> );

        return (
            <div className="form_container">
                <div className="author_name">{this.props.currentUser.username}</div>
                <form className="photo-form" onSubmit={this.handleSubmit}>
                    
                    {imageUpload}

                    <textarea className="content-text"
                        type="text"
                        value={this.state.content}
                        onChange={this.handleInput("content")}
                        placeholder="Add a caption, if you like"
                    />

                    <div className="post-form-footer">
                        <button onClick={this.props.closeModal} className="close-modal">Close</button>
                        <input className="submit-post" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(PhotoForm);
