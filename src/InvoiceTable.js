import React from 'react';
import { Table, Button } from 'antd';
import axios from 'axios';

class InvoiceTable extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            data: [],
        };
        this.columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '金额',
                dataIndex: 'amount',
                key: 'amount',
            },
            {
                title: '内容',
                dataIndex: 'content',
                key: 'content',
            },
            {
                title: '是否报销',
                dataIndex: 'paid',
                key: 'paid',
                render: (paid) => {
                    return paid === '1' ? '是' : '否';
                },
            },
            {
                title: '下载链接',
                dataIndex: 'url',
                key: 'url',
                render: (url) => {
                    return (
                        <a href={url} target="_blank" rel="noopener noreferrer">点击查看</a>
                    );
                }
            },
            {
                title: '上传时间',
                dataIndex: 'createdAt',
                key: 'createdAt',
            },
            {
                title: '操作',
                dataIndex: 'id',
                key: 'id',
                render: (id) => {
                    return (
                        <Button>标记为已报销</Button>
                    );
                }
            },
        ];

        const url = new URL(window.location.href);
        const password = url.searchParams.get('password') || '';

        axios.get(`/invoice-server/list.php?password=${password}`).then((response) => {
            console.log(response.data);
            this.setState({
                data: response.data.data,
            });
        });
    }

    paid(item) {
        console.log(item);
    }

    render() {
        return (
            <Table dataSource={this.state.data} columns={this.columns} rowKey={(record) => record.id}></Table>
        );
    }
}

export default InvoiceTable;