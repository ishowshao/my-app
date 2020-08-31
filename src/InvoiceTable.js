import React from 'react';
import { Table } from 'antd';

class InvoiceTable extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            data: [
                {id: 1, amount: 100, content: '手机', paid: true, url: 'http://www.baidu.com/'},
                {id: 2, amount: 200, content: '电脑', paid: false, url: 'http://www.baidu.com/'},
            ],
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
            },
            {
                title: '下载链接',
                dataIndex: 'url',
                key: 'url',
            },
            // {
            //     title: '操作',
            //     dataIndex: 'id',
            //     key: 'op',
            // },
        ];
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