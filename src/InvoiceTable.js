import React from 'react';
import { Table, Button, message } from 'antd';
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
                dataIndex: 'md5',
                key: 'md5',
                render: (md5) => {
                    const url = `https://cdn.yinyuezhushou.com/fapiao/${md5}.pdf`;
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
                render: (id, record) => {
                    const text = record.paid === '0' ? '标记为已报销' : '标记为未报销';
                    return (
                        <Button onClick={() => this.changePaid(record)}>{text}</Button>
                    );
                }
            },
        ];

        const url = new URL(window.location.href);
        this.password = url.searchParams.get('password') || '';
        this.getList();
    }

    getList() {
        axios.get(`/invoice-server/list.php?password=${this.password}`).then((response) => {
            this.setState({
                data: response.data.data,
            });
        });
    }

    changePaid(item) {
        // console.log(item);
        axios.get(`/invoice-server/paid.php?password=${this.password}&id=${item.id}&paid=${item.paid === '0' ? '1' : '0'}`).then((response) => {
            item.paid = item.paid === '0' ? '1' : '0';
            this.setState({
                data: this.state.data
            });
        }).catch(error => {
            message.error(String(error));
        });
    }

    totalNotPaid() {
        let total = 0;
        this.state.data.forEach(invoice => {
            if (invoice.paid === '0') {
                total += Number(invoice.amount);
            }
        });
        return total;
    }

    render() {
        return (
            <div>
                <Table dataSource={this.state.data} columns={this.columns} rowKey={(record) => record.id}></Table>
                <div>未报销总计：{this.totalNotPaid()}</div>
            </div>
        );
    }
}

export default InvoiceTable;