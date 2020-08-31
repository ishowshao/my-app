import React from 'react';
import { Upload, message, Button } from 'antd';

class InvoiceUpload extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();

        const url = new URL(window.location.href);
        const password = url.searchParams.get('password') || '';
        this.password = password;
    }

    render() {
        const props = {
            name: 'file',
            action: `/invoice-server/upload.php?password=${this.password}`,
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    console.log(info);
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        return (
            <Upload {...props}>
                <Button type="primary">上传发票</Button>
            </Upload>
        );
    }
}

export default InvoiceUpload;