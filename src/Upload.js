import React from 'react';

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    render() {
        return (
            <label>
                Upload file:
                <input type="file" ref={this.fileInput} />
            </label>
        );
    }
}

export default Upload;