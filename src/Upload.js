import React from 'react';
import { Button } from 'antd';

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    render() {
        return (
            <div>
                <label>
                    Upload file:
                    <input type="file" ref={this.fileInput} />
                </label>
                <Button type="primary">Button</Button>
            </div>
        );
    }
}

export default Upload;